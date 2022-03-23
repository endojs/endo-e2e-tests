#!/bin/bash
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc
. $(brew --prefix nvm)/nvm.sh  # if installed via Brew

nvm use 12
npm run run-node

nvm use 14
npm run run-node

nvm use 16
npm run run-node

nvm use 17
npm run run-node
