const Print = require("../models/prints");

const createPrint = (req, res) => {
  res.render("prints/new", { title: "Add Print" });
};

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    const newPrint = await Print.create(req.body);
    res.redirect(`/prints/aprints`);
  } catch (err) {
    console.log(err);
    res.render("prints/new", { errorMsg: err.message });
  }
}

const getAllPrints = async (req, res) => {
  try {
    const prints = await Print.find();
    res.render("prints/aprints", { title: "All Prints", prints });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const deletePrint = async (req, res) => {
  try {
    const printId = req.params.id;
    await Print.findByIdAndRemove(printId);
    res.redirect("/prints/aprints");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const getPrintDetails = async (req, res) => {
  try {
    const printId = req.params.id;
    const print = await Print.findById(printId);
    if (!print) {
      return res.status(404).send("Print not found");
    }
    res.render("prints/details", { title: "Print Details", print });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

module.exports = {
  createPrint,
  create,
  getAllPrints,
  deletePrint,
  getPrintDetails,
};
