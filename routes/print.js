const express = require("express");
const router = express.Router();

router.get("/aprints", function (req, res) {
  res.render("prints/aprints", { title: "All Prints" });
});

router.get("/new", function (req, res) {
  res.render("prints/new", { title: "Add Print" });
});

module.exports = router;
