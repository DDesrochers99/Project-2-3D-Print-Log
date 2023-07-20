// routes/print.js
const express = require("express");
const router = express.Router();
const printController = require("../controllers/print");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/aprints", ensureLoggedIn, printController.getAllPrints);

router.get("/new", ensureLoggedIn, printController.createPrint);

router.get("/prints", ensureLoggedIn, printController.getAllPrints);

router.get("/:id", ensureLoggedIn, printController.getPrintDetails);

router.post("/", ensureLoggedIn, printController.create);

router.delete("/:id", ensureLoggedIn, printController.deletePrint);

module.exports = router;
