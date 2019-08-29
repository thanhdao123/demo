const express = require("express");

async function startServer() {
  const app = express();
  app.listen(4000, () => {
    console.log(" SERVER-REST is running on port 4000");
  });
}

startServer();
