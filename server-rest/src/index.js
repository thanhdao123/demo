const imageServices = require("image.services");
const rabbitServics = require("rabbit.services");

async function startServer() {
  // await rabbitServics.connectRabbitMQ();
  // rabbitServics.startConsumer();
  console.log("Worker is running ....");
}

startServer();
