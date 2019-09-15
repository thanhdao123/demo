module.exports = function generateRandomString(len) {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, len - 1);
};
