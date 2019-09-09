const http = require("http");
const { serverPort } = require("configs/constants.config");

const setupApolloServer = require("app-apollo/setup");
const setupExpress = require("app-express/setup");
const connectDB = require("db/connectDB");
const startConsumer = require("services/rabbit.services");

async function startServer() {
  const expressApp = setupExpress();
  const httpServer = http.createServer(expressApp);
  const apolloServer = setupApolloServer();
  apolloServer.applyMiddleware({ app: expressApp });
  apolloServer.installSubscriptionHandlers(httpServer);

  await connectDB();
  await startConsumer();

  httpServer.listen(serverPort, () => {
    console.log("#################################################");
    console.log(" 🛡️  Server listening on port: ", serverPort, " 🛡️ ");
    console.log("#################################################");
  });
}

startServer();
