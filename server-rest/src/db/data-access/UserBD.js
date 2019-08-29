const UserModel = require("db/models/user.model");

exports.saveUser = async function(userInfo) {
  const user = UserModel(userInfo);
  await user.validate();
  await user.save();
  return user;
};
