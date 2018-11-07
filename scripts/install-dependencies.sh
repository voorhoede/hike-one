#!/usr/bin/env bash

# Install jmespath
wget https://github.com/jmespath/jp/releases/download/0.1.3/jp-linux-amd64 -O /usr/local/bin/jp \
	&& chmod +x /usr/local/bin/jp

# install nodejs dependencies
npm install;
