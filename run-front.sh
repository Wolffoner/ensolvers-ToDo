#!/bin/bash

#Run FrontEnd on :localhost:3000

sudo apt-get install yarn
cd ./tasktodo-frontend
yarn add .
yarn start
