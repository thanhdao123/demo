FROM node:alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app

COPY package.json package.json

RUN yarn install

COPY . .

CMD ["yarn", "start"]