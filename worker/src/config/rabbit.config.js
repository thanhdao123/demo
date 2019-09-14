const internalRabbitServerConfig = {
  hostname: "rabbit",
  port: 5672,
  username: "guest",
  password: "guest",
  frameMax: 0,
  heartbeat: 0,
  vhost: "/"
};

module.exports = { internalRabbitServerConfig };
