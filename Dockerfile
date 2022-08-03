FROM node:16.0-stretch

WORKDIR /application

COPY package.json ./
COPY workspaces/api/package.json ./workspaces/api/
COPY yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install

COPY . .