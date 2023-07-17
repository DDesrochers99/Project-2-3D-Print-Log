const express = require("express");
const router = express.Router();

router.get("/new", function (req, res) {
  res.render("prints/new", { title: "" }); 
});

router.get("/all", function (req, res) {
  res.render("prints/allprints", { title: "" }); 
});
module.exports = router;
