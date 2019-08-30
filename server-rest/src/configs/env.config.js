const port = 4000;
const appSecret = "app secret";
const mongooseURI = getMongooseURI();

function getMongooseURI() {
  return process.env.NODE_ENV === "TEST"
    ? "mongodb://root:root_password@localhost:27017/admin"
    : "mongodb://root:root_password@mongodb:27017/admin";
}

module.exports = { port, appSecret, mongooseURI };
