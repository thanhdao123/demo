const amqp = require("amqplib");

function setup() {
  const QUEUE = "upload-photo-moderation";
  const connectionConfig = {
    protocol: "amqp",
    hostname: "54.38.40.255",
    port: 5672,
    username: "moderation",
    password: "BwNtc3e3ZcNVEsfS",
    frameMax: 0,
    heartbeat: 0,
    vhost: "/"
  };

  let channel = null;

  async function connectRabbitMQ() {
    const conn = await amqp.connect(connectionConfig);
    const ch = await conn.createChannel();

    ch.prefetch(1);

    await ch.assertQueue(QUEUE, { durable: true });

    ch.on("close", () => console.log(" [RabbitMQ] channel closed!"));

    channel = ch;

    return ch;
  }

  async function getChannel() {
    return channel || (await connectRabbitMQ());
  }

  return { QUEUE, connectRabbitMQ, getChannel };
}

const { QUEUE, connectRabbitMQ, getChannel } = setup();

async function startConsumer() {
  console.log(" [C] Server Waiting for messages in |%s|", QUEUE);
  const channel = await getChannel();
  await channel.consume(QUEUE, consumer, {
    noAck: false
  });

  function consumer(message) {
    const o = JSON.parse(message.content.toString());
    console.log(" [C] recieved a Task: ", o);
  }
}

module.exports = { connectRabbitMQ, startConsumer };
