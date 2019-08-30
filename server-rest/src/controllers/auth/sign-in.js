function makeSignin({ UserDB }) {
  return async function signin(httpRequest) {
    const { email, password } = httpRequest.body;
    const found = await UserDB.findOne({ email });

    return { user };
  };
}

module.exports = makeSignin;
