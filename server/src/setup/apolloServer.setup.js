import { ApolloServer, gql, PubSub } from "apollo-server";

const pubsub = new PubSub();

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const typeDefs = gql`
  type Query {
    books: [Book]
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

  type Book {
    title: String
    author: String
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
    books: () => books,
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
