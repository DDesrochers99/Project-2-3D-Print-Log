const Print = require("../models/prints");
const Review = require("../models/prints");

async function create(req, res) {
  const print = await Print.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  print.reviews.push(req.body);
  try {
    await print.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/prints/${print._id}`);
}
async function deleteReview(req, res) {
  const print = await Print.findOne({
    "reviews._id": req.params.id,
    "reviews.user": req.user._id,
  });
  if (!print) return res.redirect("/prints");
  print.reviews.remove(req.params.id);
  await print.save();
  res.redirect(`/prints/${print._id}`);
}

async function updateReview(req, res) {
  try {
    const printId = req.params.printId;
    const reviewId = req.params.reviewId;
    const { content } = req.body;
    const print = await Print.findById(printId);
    if (!print) {
      return res.status(404).json({ error: "Print not found" });
    }
    const review = print.reviews.find((r) => r._id.equals(reviewId));
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    review.content = content;
    await print.save();
    res.redirect(`/prints/${printId}`);
  } catch (err) {
    res.status(500).json({ error: "Error updating review" });
  }
}

async function showUpdateReview(req, res) {
  try {
    const { printId, reviewId } = req.params;
    const print = await Print.findById(printId);
    const review = print.reviews.find((r) => r.id === reviewId);
    if (!review) {
      return res.status(404).send("Review not found.");
    }
    res.render("update-review", { title: "Update Review", print, review });
  } catch (error) {
    console.error("Error fetching review for update:", error);
    res.status(500).send("Error fetching review for update.");
  }
}

module.exports = {
  create,
  delete: deleteReview,
  updateReview,
  showUpdateReview,
};
