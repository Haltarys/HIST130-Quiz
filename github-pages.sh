#!/bin/bash

# Preparation
mv 404.html public/
mv github-pages.html index.html

# Build and deployment
yarn run build --base='/HIST130-Quiz/'
yarn run gh-pages --dist dist --branch public

# Restore changes
git restore . && git clean -fd
