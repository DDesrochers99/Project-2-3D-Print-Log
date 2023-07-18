



exports.home = async function(req,res) {
    res.render("index", { title: "" });
};

async function index(req, res) {
  res.render("prints/aprints", { title: "" });
};