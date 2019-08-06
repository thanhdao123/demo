import express from "express";

function startServer() {
  const app = express();

  app.use("/", (req, res) => {
    res.send({ message: "hello" });
  });

  app.listen(8000, () => {
    console.log("App listening on port: 8000");
  });
}

startServer();
