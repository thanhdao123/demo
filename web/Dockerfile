FROM node:alpine as builder
WORKDIR /app
COPY package.json package.json
RUN yarn install --production
COPY . .
RUN yarn build

FROM nginx:alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html 