var express = require("express");
var router = express.Router();
const passport = require("passport");

module.exports = router;

router.get("/", function (req, res, next) {
  res.render("index", { title: "3D Print Logger" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/prints/aprints",
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});
