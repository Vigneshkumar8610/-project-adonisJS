#!/usr/bin/env bash

docker images -f "dangling=true"

docker rmi $(docker images -f "dangling=true" -q) --force || true

docker image prune -a -f