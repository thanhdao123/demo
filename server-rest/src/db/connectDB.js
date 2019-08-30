const mongoose = require("mongoose");
const { mongooseURI } = require("configs/env.config");

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
  return mongoose.connect(mongooseURI, {
    useNewUrlParser: true,
    autoReconnect: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
}

module.exports = connectDB;
