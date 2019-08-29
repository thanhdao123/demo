const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("app-apollo/setup/typeDefs");
const resolvers = require("app-apollo/setup/resolvers");

function setupApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  return server;
}

module.exports = setupApolloServer;
