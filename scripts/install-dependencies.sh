#!/usr/bin/env bash

set -u;

# temporarily remove package.json to avoid installing project dependencies
mv package.json disabled-package.json;

# install plek; the only package required to deploy the project.
npm install --no-save uuid;

# restore package.json
mv disabled-package.json package.json;
