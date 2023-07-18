const Print = require("../models/prints");

const getAllPrints = (req, res) => {
  res.render("prints/aprints", { title: "All Prints" });
};

const createPrint = (req, res) => {
  res.render("prints/new", { title: "Add Print" });
};

const create = async (req, res) => {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    const newPrint = await Print.create(req.body);
    res.redirect(`/prints/aprints`, );
  } catch (err) {
    console.log(err);
    res.render("prints/new", { errorMsg: err.message });
  }
};

module.exports = {
  getAllPrints,
  createPrint,
  create,
};
