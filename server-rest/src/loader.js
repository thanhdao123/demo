const passport = require("configs/passport.config");
const cors = require("cors");
const morgan = require("morgan");
const bodyParse = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("routes");

function loader(app) {
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(bodyParse.json());
  app.use(bodyParse.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    require("express-session")({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(routes);
}

module.exports = loader;
