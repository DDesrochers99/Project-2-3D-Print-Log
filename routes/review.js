const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("../config/ensureLoggedIn");
const reviewController = require("../controllers/review");

router.post("/:id/review", ensureLoggedIn, reviewController.create);

router.delete('/reviews/:id', ensureLoggedIn, reviewController.delete);

module.exports = router;
