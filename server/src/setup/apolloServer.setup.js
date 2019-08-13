import { ApolloServer, gql, PubSub } from "apollo-server-express";

const pubsub = new PubSub();

const typeDefs = gql`
  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(author: String, comment: String): Post
  }

  type Subscription {
    postAdded: Post
  }

  type Post {
    author: String
    comment: String
  }
`;

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

const resolvers = {
  Query: {
    posts: () => postController.posts()
  },
  Mutation: {
    addPost(_, post) {
      pubsub.publish(POST_ADDED, { postAdded: post });
      return postController.addPost(post);
    }
  },
  Subscription: {
    postAdded: {
      subscribe: () => pubsub.asyncIterator([POST_ADDED])
    }
  }
};

export default function setupApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  return server;
}
