const http = require("http");
const { serverPort } = require("configs/constants.config");

const setupApolloServer = require("app-apollo/setup");
const setupExpress = require("app-express/setup");
const connectDB = require("db/connectDB");
<<<<<<< HEAD
=======
const startConsumer = require("services/rabbit.services");
>>>>>>> af68fc96af2345a890b402bc52bd770ffd370e71

async function startServer() {
  const expressApp = setupExpress();
  const httpServer = http.createServer(expressApp);
  const apolloServer = setupApolloServer();
  apolloServer.applyMiddleware({ app: expressApp });
  apolloServer.installSubscriptionHandlers(httpServer);

  await connectDB();
<<<<<<< HEAD

  httpServer.listen(port, () => {
=======
  await startConsumer();

  httpServer.listen(serverPort, () => {
>>>>>>> af68fc96af2345a890b402bc52bd770ffd370e71
    console.log("#################################################");
    console.log(" 🛡️  Server listening on port: ", serverPort, " 🛡️ ");
    console.log("#################################################");
  });
}

startServer();
