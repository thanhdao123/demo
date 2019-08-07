FROM node:alpine

WORKDIR /app

COPY package.json package.json

RUN yarn install

COPY . .

CMD ["yarn", "start"]