const amqp = require("amqplib");

let channel = null;
const QUEUE = "image-queue";

async function connectRabbitMQ() {
  const conn = await amqp.connect(`amqp://rabbit`);
  const ch = await conn.createChannel();

  await ch.assertQueue(QUEUE, { durable: true });

  ch.on("close", () => console.log(" [RabbitMQ] channel closed!"));

  channel = ch;
}

async function publishTask(message) {
  await channel.sendToQueue(QUEUE, Buffer.from(message), {
    persistent: true
  });
  console.log(" [P] a NEW messge sent to |%s|", QUEUE);
}

const rabbitServices = Object.freeze({ connectRabbitMQ, publishTask });

module.exports = rabbitServices;
