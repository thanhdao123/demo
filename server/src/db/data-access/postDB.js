import PostModel from "db/models/post.model";

import getRandomDate from "utils/date-time/get-random-date";

export function addPost({ title = "" }) {
  const post = new PostModel({
    title,
    ts: getRandomDate(new Date(2019, 8, 10), new Date())
  });
  post.save();
  return post;
}

export function getAllPosts() {
  return PostModel.find({});
}
