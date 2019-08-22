import http from "http";
import { port } from "configs/constants.config";

import setupApolloServer from "setup/apollo";
import setupExpress from "setup/express";
import connectDB from "db/connectDB";
import { connectRabbitMQ } from "services/rabbit.services";

async function startServer() {
  const app = setupExpress();
  const httpServer = http.createServer(app);
  const server = setupApolloServer();
  server.applyMiddleware({ app });
  server.installSubscriptionHandlers(httpServer);

  await connectDB();
  await connectRabbitMQ();

  httpServer.listen({ port }, () => {
    console.log("#################################################");
    console.log(" 🛡️  Server listening on port: ", port, " 🛡️ ");
    console.log("#################################################");
  });
}

startServer();
