FROM node:10-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]