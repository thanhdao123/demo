const devConfig = {
  apolloURI: "docker.local/server"
};

const stagingConfig = {
  apolloURI: ""
};

function getConfig() {
  switch (process.env.STATE) {
    case "DEV":
      return devConfig;
    case "STAGING":
      return stagingConfig;
    default:
      throw new Error("STATE enviroment variable WRONG!");
  }
}

export default getConfig();
