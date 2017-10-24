#!/usr/bin/env bash
set -euo pipefail;

# Deploy script for use in travis. Performs a now deployment to staging
# environment if the branch name that triggered the build was 'master'.
# If the build was triggered by a tag being pushed (identified by the format
# v0.0.0), a now deployment to production is triggered.

# The domain names that are aliases to a now deployment, are expected to be
# found in 'domains.txt' in the project root.

# The script will wait until the status of a deployment is either 'ready' or
# 'build_error'

# Required environment variables
# 1. TRAVIS_BRANCH: the branch name used by travis
# 2. NOW_TOKEN: Authentication token for zeit.now
# 3. DATO_API_TOKEN: Read-only authentication token for dato CMS
# 4. RELOAD_TOKEN: token used to authenticate dato content update calls
# 5. DATO_URL_STAGING: dato confirmation callback url for staging
# 6. DATO_URL_PRODUCTION: dato confirmation callback url for production

# Usage: bash deploy-env.sh

poll_interval=20;
poll_attempts=40;

# domains.txt should exist
[ -f ./domains.txt ] || { \
	echo 'Error: domains.txt not found in project root' >&2; \
	exit 1; \
}

deployment_status () {
	local environment=$1
	local url=$2
	now -t "$NOW_TOKEN" ls "$1" | grep "$url" | awk '{ print $3 }';
}

deploy () {
	# grab function arguments
	local environment=$1;
	local url="$2";
	local prefix=${3:-0}; # whether to prefix domain with environment or not

	echo 'Start a now deployment';

	# create a now deployment and save the web address it returns
	local deployment;

	# Check for errors that might have occurred in now deploy
	if ! deployment=$(now deploy -C \
		-n "$environment" \
		-t "$NOW_TOKEN" \
		-e DATO_API_TOKEN="$DATO_API_TOKEN" \
		-e RELOAD_TOKEN="$RELOAD_TOKEN" \
		-e DATO_URL="$url" \
		-e NODE_ENV="$environment" \
		-e ENVIRONMENT="$environment")
	then
		echo "An error occurred while attempting to do now deploy";
		exit 1;
	fi;

	frontwarden $deployment
	# If successful, strip protocol from url returned from now deploy
	deployment=$(sed s#https://## <<<"$deployment");

	# Verify that running now deploy returned a domain name
	grep -qE "${environment}-[a-z]+\.now\.sh" <<<"$deployment" || { \
		echo 'Error: now deployment did not return a valid domain name'; \
		exit 1; \
	}

	for (( i=1; i <= poll_attempts; i++ ))
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
		now -t "$NOW_TOKEN" alias "$deployment" "$domain";
	done <./domains.txt; # Read urls from file

	# save deployment id to global variable for future use.
	deployment_id="$deployment";
};

# Move environment specific robots file to the web root
robots () {
	local robots="$1";
	[ -f "$robots" ] && { \
		echo "$robots --> static/root/robots.txt"; \
		cp "$robots" ./static/root/robots.txt; \
	}
}

# check if travis branch matches patterns.
if grep -qE '^v[0-9]+\.[0-9]+\.[0-9]+$' <<<"$TRAVIS_BRANCH";
then
	# add robots.txt
	robots 'robots-production.txt';
	# branch name matches tag pattern = production deployment
	deploy 'production' "$DATO_URL_PRODUCTION";
	# Make sure production deployment is always running
	now -t "$NOW_TOKEN" scale "$deployment_id" 1
elif grep -qE '^master$' <<<"$TRAVIS_BRANCH";
then
	# add robots.txt
	robots 'robots-staging.txt';
	# deployment to staging environment with prefix enabled (staging.hike*.*)
	deploy 'staging' "$DATO_URL_STAGING" 1;
else
	# nothing to deploy
	echo 'nothing to deploy' >&2;
	exit 1;
fi
