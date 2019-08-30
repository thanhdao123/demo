const { Router } = require("express");
const makeExpressCallback = require("utils/make-express-callback");
const authControllers = require("controllers/auth");
const healthzController = require("controllers/health-check");

const router = Router();

router.get("/healthz", makeExpressCallback(healthzController));
router.post("/signin", makeExpressCallback(authControllers.signin));
router.post("/signup", makeExpressCallback(authControllers.signup));

module.exports = router;
