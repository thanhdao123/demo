const mongoose = require("mongoose");

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
  return mongoose.connect("mongodb://root:root_password@mongodb:27017/admin", {
    useNewUrlParser: true,
    autoReconnect: true,
    useFindAndModify: false,
    reconnectTries: 1000000,
    reconnectInterval: 3000
  });
}

module.exports = connectDB;
