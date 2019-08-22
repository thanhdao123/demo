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

async function startConsumer() {
  console.log(" [C] Server Waiting for messages in |%s|", QUEUE);
  await channel.consume(QUEUE, consumer, {
    noAck: false
  });

  function consumer(message) {
    console.log(" [C] recieved a Task");
    setTimeout(() => finshTask(message), 3000);
  }

  function finshTask(message) {
    console.log(" [C] finished a Task");
    channel.ack(message);
  }
}

module.exports = { connectRabbitMQ, startConsumer };
