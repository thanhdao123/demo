const express = require("express");

const router = express.Router();

router.get("/healthz", healthCheckController);

function healthCheckController(_, res) {
  res.send({ message: "I'm Healthy!" });
}

module.exports = router;
