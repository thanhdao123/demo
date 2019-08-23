const PostModel = require("db/models/post.model");

const getRandomDate = require("utils/date-time/get-random-date");

function addPost({ title = "" }) {
  const post = new PostModel({
    title,
    ts: getRandomDate(new Date(2019, 8, 10), new Date())
  });
  post.save().then(console.log);
  return post;
}

async function getAllPosts() {
  return await PostModel.find({});
}

const PostDB = Object.freeze({ addPost, getAllPosts });

module.exports = PostDB;
