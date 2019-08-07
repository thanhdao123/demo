const devConfig = {
  apolloURI: "docker.local/server"
};

const stagingConfig = {
  apolloURI: "awesome-domain.tk/server"
};

function getConfig() {
  console.log(process.env);
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
