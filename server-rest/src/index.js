const express = require("express");
const loader = require("loader");
const connectDB = require("db/connectDB");

const { port } = require("configs/env.config");

async function startServer() {
  await connectDB();
  const app = express();
  loader(app);
  app.listen(port, () => {
    console.log(" SERVER-REST is running on port %d", port);
  });
}

startServer();
