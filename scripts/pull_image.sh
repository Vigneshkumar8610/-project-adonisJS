#!/usr/bin/env bash
source /opt/movie_project/.env
set -e

echo "Pulling Docker image: $IMAGE"

docker pull $IMAGE