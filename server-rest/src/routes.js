const { Router } = require("express");
const passport = require("configs/passport.config");

const router = Router();

router.get("/healthz", (req, res) => {
  res.send({ message: "I'm Healthy" });
});

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    console.log(req.session);
    res.json({ id: req.user.id, username: req.user.username });
  }
);

router.get("/secure-data", passport.authorize("local"), (req, res) => {
  res.json({ message: "Get Success" });
});

module.exports = router;
