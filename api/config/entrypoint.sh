#!/bin/bash
set -e

# Then exec the container's main process (what's set as CMD in the Dockerfile).
cd /home/backend/app

# Remove a potentially pre-existing server.pid for Rails.
rm -rf tmp/pids/* tmp/cache/*

bundle install

exec "$@"