import { PubSub } from "apollo-server-express";
import * as postDB from "db/data-access/postDB";

const pubsub = new PubSub();

const POST_ADDED = "POST_ADDED";

export const Query = {
  posts() {
    return postDB.getAllPosts();
  }
};

export const Mutation = {
  async addPost(_, { title }) {
    const postAdded = await postDB.addPost({ title });
    pubsub.publish([POST_ADDED], { postAdded });
    return postAdded;
  }
};

export const Subscription = {
  postAdded: {
    subscribe: () => pubsub.asyncIterator([POST_ADDED])
  }
};
