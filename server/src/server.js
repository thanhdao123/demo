const http = require("http");
const { port } = require("configs/constants.config");

const setupApolloServer = require("app-apollo/setup");
const setupExpress = require("app-express/setup");
const connectDB = require("db/connectDB");
const { connectRabbitMQ } = require("services/rabbit.services");

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
