import { PubSub } from "apollo-server-express";

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
  addPost(_, post) {
    pubsub.publish(POST_ADDED, { postAdded: post });
    return postController.addPost(post);
  }
};

export const Subscription = {
  postAdded: {
    subscribe: () => pubsub.asyncIterator([POST_ADDED])
  }
};
