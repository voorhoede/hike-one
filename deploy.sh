#!/usr/bin/env bash
set -euo pipefail;

# TODO:
# - build master = staging
# - build tag = production
# - build pull requests
# - different aliases for staging and production (check travis branch)
# - output the correct robots file

# Deploy script for use in travis. Performs a now deployment to staging
# environment if the branch name that triggered the build was 'master'.
# If the build was triggered by a tag being pushed (identified by the format
# v0.0.0), a now deployment to production is triggered.

# Required environment variables
# 1. TRAVIS_BRANCH: the branch name used by travis
# 2. NOW_TOKEN: Authentication token for zeit.now
# 3. DATO_API_TOKEN: Read-only authentication token for dato CMS
# 4. RELOAD_TOKEN: token used to authenticate dato content update calls
# 5. DATO_URL_STAGING: dato confirmation callback url for staging
# 6. DATO_URL_PRODUCTION: dato confirmation callback url for production

# TODO: save as env variables in travis ci
get_webhook_url () {
	echo -n 'https://webhooks.datocms.com/{{url}}/deploy-results' | sed "s/{{url}}/$1/";
}

get_domain_names () {
	prefix="${1:-}";
	names='';
	i=1;
	len=$(wc -l domains.txt | awk '{print $1}');
	while read -r domain; do
		if [ -z "$prefix" ]; then
			domain="${domain}, www.${domain}";
		else
			domain="${prefix}.${domain}";
		fi
		names="$names $domain";
		[[ i -ne len ]] && names="${names}, ";
		(( i++ ))
	done < domains.txt
	echo -n "$names";
}

tag_pattern='^v[0-9]+\.[0-9]+\.[0-9]+$';

if [[ "$TRAVIS_BRANCH" =~ $tag_pattern ]]; then
	webhook_url=$(get_webhook_url "$DATO_ENV_ID_PRODUCTION")
	# deployment_id=$(npx plek deploy "now deploy")
	echo 'we do a production deploy here'
elif [ "$TRAVIS_BRANCH" == master ]; then
	webhook_url=$(get_webhook_url "$DATO_ENV_ID_STAGING")
else
	echo 'we do a pull request build';
	webhook_url=$(get_webhook_url "$DATO_ENV_ID_STAGING");
	npx plek now staging.hike.one --app 'staging' -- -e DATO_API_TOKEN="$DATO_API_TOKEN" \
		-e RELOAD_TOKEN="$RELOAD_TOKEN" \
		-e DATO_URL="$webhook_url" \
		-e ENVIRONMENT='staging';

fi
# yolo party
# echo $(get_domain_names staging)
# jp -f now.json "merge(@, { alias: to_array([ $(echo -n get_domain_names) ]) })"
