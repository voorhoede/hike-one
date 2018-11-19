#!/usr/bin/env bash

set -u;

# jmespath is required to extend the base now.json config with additional
# properties that differ per build environment.

# Install jmespath if cache does not contain it
localbin="$LOCAL_BIN";
jp="${localbin}/jp";
jp_url='https://github.com/jmespath/jp/releases/download/0.1.3/jp-linux-amd64';

# The executable should exist if it has been pulled out of the cache
if [ ! -x "$jp" ]; then
	# Create directory, download & install jmespath as jp
	mkdir -p "$localbin";
	wget "$jp_url" -qO "$jp" && chmod +x "$jp";
fi

# temporarily remove package.json to avoid installing project dependencies
mv package.json disabled-package.json;

# install plek; the only package required to deploy the project.
npm install --no-save plek@3;

# restore package.json
mv disabled-package.json package.json;
