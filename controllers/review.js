const Print = require("../models/prints");

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
    module.exports = {
      create,
      delete: deleteReview,
    };