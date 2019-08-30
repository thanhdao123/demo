const jwt = require("jsonwebtoken");
const { appSecret } = require("configs/env.config");

function createToken({ data }) {
  return jwt.sign(data, appSecret, { expiresIn: "1h" });
}

module.exports = createToken;
