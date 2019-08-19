import PostModel from "db/models/post.model";

import getRandomDate from "utils/get-random-date";

export function addPost(title = "") {
  return PostModel.create({
    title,
    ts: getRandomDate()
  });
}
