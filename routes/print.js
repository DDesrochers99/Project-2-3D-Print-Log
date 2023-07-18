const express = require("express");
const router = express.Router();

router.get("/aprints", function (req, res) {
  res.render("prints/aprints", { title: "" });
});

router.get("/new", function (req, res) {
  res.render("prints/new", { title: "" });
});

module.exports = router;
