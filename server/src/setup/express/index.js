import express from "express";

import cors from "cors";
import morgan from "morgan";

import routes from "setup/express/routes";

export default function setupExpress() {
  const app = express();

  app.use(cors());
  app.use(morgan("tiny"));

  app.use(routes);

  return app;
}
