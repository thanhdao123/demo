const serverPort = process.env.SERVER_PORT;

const rabbitConfig = {
  hostname: process.env.RABBIT_HOSTNAME,
  port: process.env.RABBIT_PORT,
  username: process.env.RABBIT_USERNAME,
  password: process.env.RABBIT_PASSWORD
};

const mongoConfig = {
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  database: process.env.MONGO_DATABASE,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD
};

module.exports = Object.freeze({ serverPort, rabbitConfig, mongoConfig });
