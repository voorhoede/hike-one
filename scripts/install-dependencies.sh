#!/usr/bin/env bash

set -u;

# temporarily remove package.json to avoid installing project dependencies
mv package.json disabled-package.json;

# install uuid to generate a meta tag for identifying the staging deployment
# for aliasing when building the master branch.
npm install --no-save uuid;

# restore package.json
mv disabled-package.json package.json;
