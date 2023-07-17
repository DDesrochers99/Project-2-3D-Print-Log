const express = require("express");
const router = express.Router();

router.get("/prints/new", (req, res) => {
  res.render("prints/new");
});

module.exports = router;
