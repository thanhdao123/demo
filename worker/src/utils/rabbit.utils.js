const amqp = require("amqplib");

async function createRabbitChannel(rabbitServerConfig) {
  const conn = await amqp.connect(rabbitServerConfig);
  return conn.createChannel();
}

module.exports = { createRabbitChannel };
