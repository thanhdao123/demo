const http = require("http");
const { port } = require("configs/constants.config");

const setupApolloServer = require("app-apollo/setup");
const setupExpress = require("app-express/setup");
const connectDB = require("db/connectDB");

async function startServer() {
  const expressApp = setupExpress();
  const httpServer = http.createServer(expressApp);
  const apolloServer = setupApolloServer();
  apolloServer.applyMiddleware({ app: expressApp });
  apolloServer.installSubscriptionHandlers(httpServer);

  await connectDB();

  httpServer.listen(port, () => {
    console.log("#################################################");
    console.log(" 🛡️  Server listening on port: ", port, " 🛡️ ");
    console.log("#################################################");
  });
}

startServer();
