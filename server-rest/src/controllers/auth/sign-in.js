function makeSignin({ UserDB, createToken }) {
  return async function signin(httpRequest) {
    const { email, password } = httpRequest.body;

    const found = await UserDB.findOne({ email });
    if (!found) {
      throw new Error("User not found !");
    }

    const valid = found.isValidPassword(password);
    if (!valid) {
      throw new Error("Wrong Password");
    }

    const token = createToken({ data: { email } });

    return { user: { email }, token };
  };
}

module.exports = makeSignin;
