#!/usr/bin/env bash

# Run dato with preview flag if in staging environment.

flag=

[ "$ENVIRONMENT" = staging ] && flag=' --preview';
cmd="$(printf 'dato dump %s' "$flag")";

set -x;

eval "$cmd";
