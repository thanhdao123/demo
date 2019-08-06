import express from "express";
import { port } from "configs/constants.config";

function startServer() {
  const app = express();

  app.use("/", (req, res) => {
    res.send({ message: "hello" });
  });

  app.listen(port, () => {
    console.log("#################################################");
    console.log(" 🛡️  Server listening on port: ", port, " 🛡️ ");
    console.log("################################################");
  });
}

startServer();
