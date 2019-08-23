const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  ts: Date
});

module.exports = model("Post", PostSchema);
