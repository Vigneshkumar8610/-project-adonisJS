#!/usr/bin/env bash
source /opt/test_movie/.env
set -e

echo "Pulling Docker image: $IMAGE"

docker pull $IMAGE