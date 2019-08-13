import express from "express";

const router = express.Router();

router.get("/healthz", healthCheck);

function healthCheck(_, res) {
  res.send({ message: "I'm Healthy!" });
}

export default router;
