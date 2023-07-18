// routes/print.js

const express = require("express");
const router = express.Router();
const printController = require("../controllers/print");

router.get("/aprints", printController.getAllPrints);

router.get("/new", printController.createPrint);

router.get("/prints", printController.getAllPrints);

router.get("/:id", printController.getPrintDetails);

router.post("/", printController.create);

router.delete("/:id", printController.deletePrint);

module.exports = router;
