// controllers/print.js
const Print = require("../models/prints");

const createPrint = async (req, res) => {
  try {
    const print = new Print(req.body);
    const savedPrint = await print.save();
    res.redirect("/prints/aprints"); 
  } catch (err) {
    res.render("error", { error: "Internal server error" }); 
  }
};


module.exports = {
    createPrint,
};