const port = process.env.APP_PORT;

const mongoConfig = {
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DATABASE
};

const internalRabbitConfig = {
  hostname: process.env.INTERNAL_RABBIT_HOSTNAME,
  port: process.env.INTERNAL_RABBIT_PORT,
  username: process.env.INTERNAL_RABBIT_USERNAME,
  password: process.env.INTERNAL_RABBIT_PASSWORD
};

module.exports = { port, internalRabbitConfig, mongoConfig };
