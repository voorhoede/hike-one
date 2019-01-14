#!/usr/bin/env bash
set -euo pipefail;
# hike.one deploy script

# Deploy script for use in travis that uses https://github.com/voorhoede/plek
# to deploy different environments of the hike.one website.
# 1 - new git tag = deployment to production (hike.one)
# 2 - new commit(s) on master = deployment to staging.hike.one
# 3 - new PR = pull request deployment (pr-{{ pr number }}.hike.one)

# Required environment variables (set in travis-ci)
# 1. TRAVIS_BRANCH: the branch name used by travis
# 2. NOW_TOKEN: Authentication token for zeit.now
# 3. DATO_API_TOKEN: Read-only authentication token for dato CMS
# 4. RELOAD_TOKEN: token used to authenticate dato content update calls
# 5. DATO_ENV_ID_STAGING: dato env id for staging
# 6. DATO_ENV_ID_PRODUCTION: dato env id for production

# Create the url that the application should call after a successful dato
# content deployment
get_webhook_url () {
	echo -n 'https://webhooks.datocms.com/{{url}}/deploy-results' | sed "s/{{url}}/$1/";
}

# Get the domain names to alias for production and append www to each.
get_domain_names () {
	local names='';
	local i=1;
	local len=$(wc -l domains.txt | awk '{print $1}');
	while read -r domain; do
		names="$names '${domain}', 'www.${domain}'";
		[[ i -ne len ]] && names="${names}, ";
		(( i++ ))
	done < domains.txt
	echo -n "$names";
}

# staging and pr builds should not be crawled
disallow_robots () {
	echo 'Disallow: /' >> static/root/robots.txt;
}

# Write a now.json config file with environment specific overrides
create_now_config_1 () {
	local deployment="$1";
	local query="merge(@, { name: '$deployment' })";
	jp "$query" <<< "$now_config" > now.json;
}

create_now_config_2 () {
	local deployment="$1";
	local overrides="$2";
	local query="merge(@, { name: '$deployment', $overrides })";
	jp "$query" <<< "$now_config" > now.json;
}

# hike.one is the main domain
main_domain="$(head -n1 domains.txt)";

# Read the now.json config file to override defaults later
now_config=$(<now.json);

# Production deployment: a new tag
if [[ "$TRAVIS_BRANCH" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
	echo 'Build production environment';
	deployment='production';
	webhook_url=$(get_webhook_url "$DATO_ENV_ID_PRODUCTION");
	create_now_config_2 "$deployment" "alias: to_array([ $(get_domain_names) ])";

	# A custom plek deployment is performed here because the production website
	# has to be reachable at multiple (sub)domain names. More elaborate
	# aliasing is required.
	npx plek deploy "now deploy \
		-n $deployment \
		-t $NOW_TOKEN \
		-e DATO_API_TOKEN=$DATO_API_TOKEN \
		-e RELOAD_TOKEN=$RELOAD_TOKEN \
		-e DATO_URL=$webhook_url \
		-e ENVIRONMENT=$deployment";

	now -t "$NOW_TOKEN" alias;
# Staging is deployed from master, pull requests targeting master are ignored
elif [ "$TRAVIS_BRANCH" == master ] && [ -z "$TRAVIS_PULL_REQUEST_BRANCH" ]; then
	echo 'Build staging environment';
	deployment='staging';
	disallow_robots;
	webhook_url=$(get_webhook_url "$DATO_ENV_ID_STAGING");
	create_now_config_1 "$deployment";

	# Staging deployment is reachable at staging.hike.one. The default alias
	# given to plek is sufficient
	npx plek now "staging.${main_domain}" --app 'staging' -- \
		-e DATO_API_TOKEN="$DATO_API_TOKEN" \
		-e RELOAD_TOKEN="$RELOAD_TOKEN" \
		-e DATO_URL="$webhook_url" \
		-e ENVIRONMENT='staging';
# PR deployment for every pull request
else
	echo 'Build a pull request';
	deployment='pr';
	disallow_robots;
	create_now_config "$deployment";

	npx plek now "$main_domain" --app "$deployment" -- \
		-e DATO_API_TOKEN="$DATO_API_TOKEN" \
		-e ENVIRONMENT="$deployment";
fi
