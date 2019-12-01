FROM node:lts-alpine as base
# set up separate di
WORKDIR /var/deploy/
COPY package.json .
RUN npm install --quiet
ENV NODE_PATH /var/deploy/node_modules:$NODE_PATH
ENV PATH  /var/deploy/node_modules/.bin:$PATH
# set the working directory for the app
WORKDIR /var/deploy/app/

FROM base as dev

FROM base as prod
COPY . .