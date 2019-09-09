const amqp = require("amqplib");
const { rabbitConfig } = require("configs/constants.config");

const getChannel = setupRabbit(rabbitConfig);

async function startConsumer() {
  const QUEUE = "image-queue";
  const channel = await getChannel();

  await channel.prefetch(1);
  await channel.assertQueue(QUEUE, { durable: true });
  await channel.consume(QUEUE, consumer, { noAck: false });

  async function consumer(msg) {
    console.log(" [C] Receive message: %s", msg.content.toString());
    await channel.ack(msg);
    console.log(" [C] Finish process message: %s", msg.content.toString());
  }

  console.log(" [C] start receive messgae on queue |%s|", QUEUE);
}

function setupRabbit(config) {
  const channel = null;

  async function createChannel() {
    const conn = await amqp.connect(config);
    const ch = await conn.createChannel();
    return ch;
  }

  async function getChannel() {
    return channel || (await createChannel());
  }

  return getChannel;
}

async function makePublishMessageToTargetQueue(queue) {
  const channel = await getChannel();
  async function publishTask(message) {
    await channel.sendToQueue(queue, Buffer.from(message), {
      persistent: true
    });
    console.log(" [P] a NEW messge sent to |%s|", queue);
  }

  return publishTask;
}

module.exports = startConsumer;
