/* eslint-disable no-sync */
const fs = require("fs");
const serverPort = process.env.SERVER_PORT;

const rabbitConfig = {
  hostname: process.env.RABBIT_HOSTNAME,
  port: process.env.RABBIT_PORT,
  username: getSecret("rabbit_username"),
  password: getSecret("rabbit_password")
};

const mongoConfig = {
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_PORT,
  database: process.env.MONGO_DATABASE,
  username: getSecret("mongo_username"),
  password: getSecret("mongo_password")
};

function getSecret(secretName) {
  return fs.readFileSync(`/run/secrets/${secretName}`, "utf8");
}
module.exports = Object.freeze({ serverPort, rabbitConfig, mongoConfig });
