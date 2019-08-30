const express = require("express");
const loader = require("loader");
const connectDB = require("db/connectDB");

const { port } = require("configs/env.config");

function startServer() {
  connectDB();
  const app = express();

  loader(app);

  if (process.env.NODE_ENV !== "TEST") {
    app.listen(port, () => {
      console.log(" SERVER-REST is running on port %d", port);
    });
  }

  return app;
}

module.exports = startServer();
