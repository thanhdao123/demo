import express from "express";

function startServer() {
  const app = express();
  app.listen(5000, () => {
    console.log("OKOK");
  });
}

startServer();
