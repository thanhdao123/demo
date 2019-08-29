function makeSignup({ UserDB }) {
  return async function signin(httpRequest) {
    const userInfo = httpRequest.body;
    const user = await UserDB.saveUser(userInfo);
    return { user };
  };
}

module.exports = makeSignup;
