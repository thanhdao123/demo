const devConfig = {
  apolloHttpLinkURI: "http://docker.localhost/server/graphql",
  apolloWsLinkURI: "ws://docker.localhost/server/graphql"
};

const stagingConfig = {
  apolloHttpLinkURI: "http://awesome-domain.tk/server/graphql",
  apolloWsLinkURI: "wss://awesome-domain.tk/server/graphql"
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
