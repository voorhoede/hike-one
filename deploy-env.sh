#!/usr/bin/env bash
set -euo pipefail;

# Deploy script for use in travis. Performs a now deployment to staging
# environment if the branch name that triggered the build was 'master'.
# If the build was triggered by a tag being pushed (identified by the format
# v0.0.0), a now deployment to production is triggered.

# The domain names that are aliases to a now deployment, are expected to be
# found in 'domains.txt' in the project root.

# Required arguments:

# 1. branch: the branch name used by travis
# 2. now_token: Authentication token for zeit.now
# 3. dato_api_token: Read-only authentication token for dato CMS

# Usage: bash deploy-env.sh <branch> <now_token> <dato_api_token>

branch=$1;
now_token=$2;
dato_api_token=$3;
poll_interval=10;
poll_attempts=40;

# domains.txt should exist
[ -f ./domains.txt ] || { \
	echo 'Error: domains.txt not found in project root' >&2; \
	exit 1; \
}

geturl () {
	now -t "$now_token" ls "$1" | grep -oE "${1}-[a-z]+\.now\.sh" | head -n1;
};

deployment_status () {
	local environment=$1
	local url=$2
	now -t "$now_token" ls "$1" | grep "$url" | awk '{ print $3 }';
}

deploy () {
	# grab function arguments
	local environment=$1;
	local prefix=${2:-0}; # whether to prefix domain with environment or not

	# create a now deployment
	now deploy -C \
		-n "$environment" \
		-t "$now_token" \
		-e DATO_API_TOKEN="$dato_api_token" \
		-e NODE_ENV="$environment";

	# get most recent deployment's ugly domain name
	local deployment;
	deployment=$(geturl "$environment");

	for (( i=1; i <= poll_attempts; i++))
	do
		echo "Checking now deployment status. Attempt #${i}.";
		local status;
		status=$(deployment_status "$environment" "$deployment");
		# Error if deployment_status returns an empty result
		[ -z "$status" ] && { \
			echo "Error: no deployments found for $environment" >&2; \
			exit 1; \
		}
		# Succeed if now reports status 'ready' -> break out of loop
		if grep -qi 'ready' <<<"$status"; then break; fi;
		# fail if now reports status 'build_error'
		if grep -qi 'build_error' <<<"$status";
		then
			echo "Error: now deployment reported failure, check the logs" >&2;
			exit 1;
		fi
		# Fail after attempts exceed maximum
		if (( i == poll_attempts ))
		then
			echo "Error: now deployment not ready after $poll_attempts poll attempts" >&2;
			exit 1;
		fi
		# next attempt after n seconds
		sleep $poll_interval;
	done

	# Deployment is ready. Create aliases for domains in domains.txt.
	while read -r domain
	do
		# Special things for a deployment to staging.
		if [ "$prefix" == 1 ]
		then
			# don't prefix www domain names
			if grep -qE '^www' <<<"$domain"; then continue; fi;
			# prepend environment name to domain name
			domain="${environment}.${domain}";
		fi
		# Create an alias for the domain name to the current deployment url
		now -t "$now_token" alias "$deployment" "$domain";
	done <./domains.txt; # Read urls from file
};

# check if travis branch matches patterns.
if grep -qE '^v[0-9]+\.[0-9]+\.[0-9]+$' <<<"$branch";
then
	# branch name matches tag pattern = production deployment
	environment='production';
	deploy $environment;
	echo -n $environment;
elif grep -qE '^feat/travis-dev$' <<<"$branch";
then
	# deployment to staging environment (staging.hike*.*)
	environment='staging';
	deploy $environment 1;
	echo -n $environment;
else
	# nothing to deploy
	echo 'nothing to deploy' >&2;
	exit 1;
fi

