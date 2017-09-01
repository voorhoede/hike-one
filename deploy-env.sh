#!/usr/bin/env bash
set -euo pipefail;

# Deploy script for use in travis. Performs a now deployment to staging
# environment if the branch name that triggered the build was 'master'.
# If the build was triggered by a tag being pushed (identified by the format
# v0.0.0), a now deployment to production is triggered.
# Required arguments:

# 1. branch: the branch name used by travis
# 2. now_token: Authentication token for zeit.now
# 3. dato_api_token: Read-only authentication token for dato CMS

# Usage: bash deploy-env.sh <branch> <now_token> <dato_api_token>

branch=$1;
now_token=$2;
dato_api_token=$3;

domain='hikeone.nl'

geturl () {
	now -t "$now_token" ls "$1" | grep -oE "${1}-[a-z]+\.now\.sh" | head -n1;
};

if grep -qE '^v[0-9]+\.[0-9]+\.[0-9]+$' <<<"$branch";
then
	# branch name matches tag pattern = production deployment
	environment='production';
	now deploy -C \
		-n "$environment" \
		-t "$now_token" \
		-e DATO_API_TOKEN="$dato_api_token" \
		-e NODE_ENV="$environment";
	now -t "$now_token" alias $(geturl "$environment") "${domain}";
	echo -n $environment;
	# TODO: reset regex back to 'master' when done testing
elif grep -qE '^feat/travis-dev$' <<<"$branch";
then
	# deployment to staging environment
	environment='staging';
	now deploy -C \
		-n "$environment" \
		-t "$now_token" \
		-e DATO_API_TOKEN="$dato_api_token" \
		-e NODE_ENV="$environment";
	now -t "$now_token" alias $(geturl "$environment") "${environment}.${domain}";
	echo -n $environment;
else
	# nothing to deploy
	echo 'nothing to deploy' >&2;
	exit 1;
fi

