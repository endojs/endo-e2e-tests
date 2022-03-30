#!/bin/bash

n 12.22.0
npm run run-node
mv results/node-v12.json results/node-v12.22.json

n 12.17.0
npm run run-node
mv results/node-v12.json results/node-v12.17.json
