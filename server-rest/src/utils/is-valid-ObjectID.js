const mongoose = require("mongoose");

function isValidObjectID(str) {
  return mongoose.Types.ObjectId.isValid(str);
}

module.exports = isValidObjectID;
