const devConfig = {
  apolloHttpLinkURI: "http://server.docker.localhost/graphql",
  apolloWsLinkURI: "ws://server.docker.localhost/graphql"
};

const stagingConfig = {
  apolloHttpLinkURI: "http://server.awesome-domain.tk/graphql",
  apolloWsLinkURI: "wss://server.awesome-domain.tk/graphql"
};

function getConfig() {
  switch (process.env.REACT_APP_STATE) {
    case "DEV":
      return devConfig;
    case "STAGING":
      return stagingConfig;
    default:
      throw new Error("STATE enviroment variable WRONG!");
  }
}

export default getConfig();
