FROM node:alpine

ENV DOCKERIZE_VERSION v0.6.1
RUN apk update && apk add yarn python g++ make \
  && rm -rf /var/cache/apk/* \
  && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /app

COPY package.json package.json

RUN yarn install --production

COPY . .

CMD ["sh", "-c", "dockerize -wait tcp://mongodb:27017 && yarn start"]