const UserDB = require("db/data-access/user-db");

exports.signin = require("controllers/auth/sign-in")({ UserDB });
exports.signup = require("controllers/auth/sign-up")({ UserDB });
