const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("setup/apollo/typeDefs");
const resolvers = require("setup/apollo/resolvers");

function setupApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  return server;
}

module.exports = setupApolloServer;
