const UserModel = require("db/models/user.model");

exports.saveUser = async function(userInfo) {
  console.log(userInfo, "okok");
  const user = new UserModel(userInfo);
  await user.validate();
  await user.save();
  return user;
};

exports.findOne = function(filter = {}) {
  return UserModel.findOne(filter);
};
