const mongoose = require("mongoose");
const { mongoConfig } = require("configs/constants.config");

mongoose.Promise = Promise;

mongoose.connection.on("connected", () => {
  console.log(" 🛡️  Connection Established");
});

mongoose.connection.on("reconnected", () => {
  console.log("Connection Reestablished");
});

mongoose.connection.on("disconnected", () => {
  console.log("Connection Disconnected");
});

mongoose.connection.on("close", () => {
  console.log("Connection Closed");
});

mongoose.connection.on("error", error => {
  console.log("ERROR: " + error);
});

async function connectDB() {
  const connectionString = makeConnectionString(mongoConfig);
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    autoReconnect: true,
    useFindAndModify: false
  });
}

function makeConnectionString(config) {
  const { host, port, username, password, database } = config;
  return `mongodb://${username}:${password}@${host}:${port}/${database}`;
}

module.exports = connectDB;
