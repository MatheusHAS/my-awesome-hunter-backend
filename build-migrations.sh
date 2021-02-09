#!/bin/bash
rm -rf ./compiled
./node_modules/.bin/tsc --project tsconfig-migrations.json && ./node_modules/.bin/tscpaths -p tsconfig-migrations.json -s ./src -o ./compiled