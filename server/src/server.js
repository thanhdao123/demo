import { port } from "configs/constants.config";

import setupApolloServer from "setup/apolloServer.setup";
import setupExpress from "setup/express";

function startServer() {
  const app = setupExpress();
  const server = setupApolloServer();

  server.applyMiddleware({ app });
  app.listen({ port }, () => {
    console.log("#################################################");
    console.log(" 🛡️  Server listening on port: ", port, " 🛡️ ");
    console.log("#################################################");
  });
}

startServer();
