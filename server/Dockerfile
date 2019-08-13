FROM node:alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app

COPY package.json package.json

RUN yarn install --production

COPY . .

CMD ["yarn", "start"]