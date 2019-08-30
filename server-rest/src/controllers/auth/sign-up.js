function makeSignup({ UserDB }) {
  return async function signin(httpRequest) {
    const userInfo = httpRequest.body;
    const found = await UserDB.findOne({ email: userInfo.email });
    if (found) {
      throw new Error("User already exsist!");
    }
    const user = await UserDB.saveUser(userInfo);
    console.log(user, "okok");
    return user;
  };
}

module.exports = makeSignup;
