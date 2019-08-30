const { Router } = require("express");
const passport = require("passport");
const makeExpressCallback = require("utils/make-express-callback");
const authControllers = require("controllers/auth");
const healthzController = require("controllers/health-check");
const secureRouterController = require("controllers/secure");

const router = Router();

router.get("/healthz", makeExpressCallback(healthzController));
router.post("/signin", makeExpressCallback(authControllers.signin));
router.post("/signup", makeExpressCallback(authControllers.signup));

router.post(
  "/secure-route",
  passport.authenticate("jwt", { session: false }),
  makeExpressCallback(secureRouterController)
);

module.exports = router;
