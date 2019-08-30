const passport = require("passport");
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const { appSecret } = require("configs/env.config");

passport.use(
  new JWTstrategy(
    {
      secretOrKey: appSecret,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => done(null, token)
  )
);
