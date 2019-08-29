const express = require("express");
const rabbitServices = require("services/rabbit.services");

const router = express.Router();

router.get("/healthz", healthCheckController);
router.get("/new-task", newTaskController);

function healthCheckController(_, res) {
  res.send({ message: "I'm Healthy!" });
}

async function newTaskController(_, res) {
  const message = "okok";
  await rabbitServices.publishTask(message);
  res.send({ message: "A Task is sent to Queue" });
}

module.exports = router;
