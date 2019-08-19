import http from "http";
import { port } from "configs/constants.config";

import setupApolloServer from "setup/apollo";
import setupExpress from "setup/express";
import connectDb from "db/connectDB";

async function startServer() {
  const app = setupExpress();
  const httpServer = http.createServer(app);
  const server = setupApolloServer();

  await connectDb();
  server.applyMiddleware({ app });
  server.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port }, () => {
    console.log("#################################################");
    console.log(" 🛡️  Server listening on port: ", port, " 🛡️ ");
    console.log("#################################################");
  });
}

startServer();
