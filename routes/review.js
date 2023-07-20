const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("../config/ensureLoggedIn");
const reviewController = require("../controllers/review");

router.post("/prints/:id/review", ensureLoggedIn, reviewController.create);

router.delete('/reviews/:id', ensureLoggedIn, reviewController.delete);

router.get("/prints/:printId/reviews/:reviewId/update",ensureLoggedIn, reviewController.showUpdateReview);

router.post("/prints/:printId/reviews/:reviewId/update",ensureLoggedIn, reviewController.updateReview);

module.exports = router;
