const UserDB = require("db/data-access/user-db");
const { createToken } = require("utils");

exports.signin = require("controllers/auth/sign-in")({ UserDB, createToken });
exports.signup = require("controllers/auth/sign-up")({ UserDB });
