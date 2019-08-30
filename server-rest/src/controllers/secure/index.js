async function secureRouteController(httpRequest) {
  console.log(httpRequest);
  return httpRequest;
}

module.exports = secureRouteController;
