// routes/print.js

const express = require("express");
const router = express.Router();
const printController = require("../controllers/print");

router.get("/aprints", printController.getAllPrints);

router.get("/new", printController.createPrint);

router.post("/", printController.create);

module.exports = router;
