const express = require("express");

async function startServer() {
  const app = express();
  app.listen(5000, () => {
    console.log("#################################################");
    console.log(" 🛡️  worker listening on port: ", 5000, " 🛡️ ");
    console.log("#################################################");
  });
}

startServer();
