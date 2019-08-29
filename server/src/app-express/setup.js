const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("app-express/routes");

function setupExpress() {
  const app = express();

  app.use(cors());
  app.use(morgan("tiny"));

  app.use(routes);

  return app;
}

module.exports = setupExpress;
