#!/usr/bin/env bash
set -euo pipefail;

# Deploy script for use in travis to deploy different environments of the
# hike.one website.
# 1 - new git tag = deployment to production (hike.one)
# 2 - new commit(s) on master = deployment to staging.hike.one

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

# staging and pr builds should not be crawled
disallow_robots () {
  echo 'Disallow: /' >> static/root/robots.txt;
}

# Production deployment: a new tag
if [ "$TRAVIS_BRANCH" == 'chore/zeit-now-v2' ]; then
# if [[ "$TRAVIS_BRANCH" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo 'Build production environment';
  deployment='production';
  webhook_url=$(get_webhook_url "$DATO_ENV_ID_PRODUCTION");

  npx now deploy \
    -t "$NOW_TOKEN" \
    --target "$deployment" \
    -e RELOAD_TOKEN="$RELOAD_TOKEN" \
    -e DATO_URL="$webhook_url" \
    -e ENVIRONMENT="$deployment";

# Staging is deployed from master, pull requests targeting master are ignored
elif [ "$TRAVIS_BRANCH" == 'master' ] && [ -z "$TRAVIS_PULL_REQUEST_BRANCH" ]; then
  echo 'Build staging environment';
  deployment='staging';
  disallow_robots;
  webhook_url=$(get_webhook_url "$DATO_ENV_ID_STAGING");
  # Get a unique identifier to tag this deployment
  meta="$(node -e 'console.log(require('\''uuid/v1'\'')())')";

  # Staging deployment is reachable at staging.hike.one.
  npx now deploy \
    -t "$NOW_TOKEN" \
    --target "$deployment" \
    -e RELOAD_TOKEN="$RELOAD_TOKEN" \
    -e DATO_URL="$webhook_url" \
    -e ENVIRONMENT="$deployment" \
    -m ID="$meta";

  # get the alias that was just deployed using the assigned ID meta tag
  now_deployment_id="$(npx now -t "$NOW_TOKEN" ls -m ID="$meta" | grep hike-one | awk '{ print $2 }')";

  npx now alias -t "$NOW_TOKEN" "$now_deployment_id" staging.now-v2.hike.one
fi
