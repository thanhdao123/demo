const { PubSub } = require("apollo-server-express");
const postDB = require("db/data-access/postDB");

const pubsub = new PubSub();

const POST_ADDED = "POST_ADDED";

const Query = {
  posts() {
    return postDB.getAllPosts();
  }
};

const Mutation = {
  async addPost(_, { title }) {
    const postAdded = await postDB.addPost({ title });
    pubsub.publish([POST_ADDED], { postAdded });
    return postAdded;
  }
};

const Subscription = {
  postAdded: {
    subscribe: () => pubsub.asyncIterator([POST_ADDED])
  }
};

module.exports = { Query, Mutation, Subscription };
