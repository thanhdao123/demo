const { PubSub } = require("apollo-server-express");
const PostDB = require("db/data-access/PostDB");

const pubsub = new PubSub();

const POST_ADDED = "POST_ADDED";

exports.Query = {
  posts: () => PostDB.getAllPosts()
};

exports.Mutation = {
  addPost: async (_, { title }) => {
    const postAdded = await PostDB.addPost({ title });
    pubsub.publish([POST_ADDED], { postAdded });
    return postAdded;
  }
};

exports.Subscription = {
  postAdded: {
    subscribe: () => pubsub.asyncIterator([POST_ADDED])
  }
};
