function index(req, res, next) {
    res.render("pages/index", {title: "NodeJS + AngularJS + Express Quick Start Template"});
}

module.exports = {
    index
};