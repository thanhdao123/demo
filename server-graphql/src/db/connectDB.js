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
<<<<<<< HEAD
  const connectionString = makeConnectionString(mongoConfig);
  mongoose.connect(connectionString, {
=======
  const connectionString = createConnectionString(mongoConfig);
  await mongoose.connect(connectionString, {
>>>>>>> af68fc96af2345a890b402bc52bd770ffd370e71
    useNewUrlParser: true,
    autoReconnect: true,
    useFindAndModify: false
  });
}

<<<<<<< HEAD
function makeConnectionString(config) {
  const { host, port, username, password, database } = config;
=======
function createConnectionString(config) {
  const { host, port, database, username, password } = config;
>>>>>>> af68fc96af2345a890b402bc52bd770ffd370e71
  return `mongodb://${username}:${password}@${host}:${port}/${database}`;
}

module.exports = connectDB;
