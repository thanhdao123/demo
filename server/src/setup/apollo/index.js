import { ApolloServer } from "apollo-server-express";
import typeDefs from "setup/apollo/typeDefs";
import resolvers from "setup/apollo/resolvers";

export default function setupApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  return server;
}
