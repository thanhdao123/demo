const rabbitServices = require("rabbit.services");

async function startServer() {
  await rabbitServices.connectRabbitMQ();
  await rabbitServices.startConsumer();
}

startServer();
