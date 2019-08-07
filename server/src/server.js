import { port } from "configs/constants.config";

import setupApolloServer from "setup/apolloServer.setup";

function startServer() {
  const server = setupApolloServer();

  server.listen(port, () => {
    console.log("#################################################");
    console.log(" 🛡️  Server listening on port: ", port, " 🛡️ ");
    console.log("################################################");
  });
}

startServer();
