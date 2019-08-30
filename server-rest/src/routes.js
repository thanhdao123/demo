const { Router } = require("express");
const passport = require("passport");
const { makeExpressCallback } = require("utils");
const authControllers = require("controllers/auth");
const healthzController = require("controllers/health-check");
const secureRouterController = require("controllers/secure");
const bookControllers = require("controllers/book");

const router = Router();

router.get("/healthz", makeExpressCallback(healthzController));
router.post("/signin", makeExpressCallback(authControllers.signin));
router.post("/signup", makeExpressCallback(authControllers.signup));

router.post(
  "/secure-route",
  passport.authenticate("jwt", { session: false }),
  makeExpressCallback(secureRouterController)
);

router
  .route("/book")
  .get(makeExpressCallback(bookControllers.getBooks))
  .post(makeExpressCallback(bookControllers.postBook));

router
  .route("/book/:id")
  .get(makeExpressCallback(bookControllers.getBook))
  .delete(makeExpressCallback(bookControllers.deleteBook))
  .put(makeExpressCallback(bookControllers.updateBook));

module.exports = router;
