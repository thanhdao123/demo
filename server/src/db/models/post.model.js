import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  title: String,
  ts: Date
});

export default model("Post", PostSchema);
