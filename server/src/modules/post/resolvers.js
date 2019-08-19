import { PubSub } from "apollo-server-express";
import * as postDB from "db/data-access/postDB";

const pubsub = new PubSub();

const POST_ADDED = "POST_ADDED";
function makePostController() {
  const posts = [];

  return {
    posts: () => posts,
    addPost: post => {
      posts.push(post);
      return post;
    }
  };
}
const postController = makePostController();

export const Query = {
  posts: () => postController.posts()
};

export const Mutation = {
  async addPost(_, { title }) {
    const post = await postDB.addPost({ title });
    pubsub.publish(POST_ADDED, { postAdded: post });
    return post;
  }
};

export const Subscription = {
  postAdded: {
    subscribe: () => pubsub.asyncIterator([POST_ADDED])
  }
};
