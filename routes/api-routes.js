// Requiring our models and passport as we've configured it
var db = require("../models");
//var passport = require("../config/passport.js");

module.exports = function(app) {
app.post("/api/signup", function(req, res) {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
      //bio: req.body.bio
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.post("/api/login", function(req, res) {
    res.json(req.user);
  });
  
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("index.html");
  });

  app.get("/api/members/:user", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(error, results) {
      if (error) throw error;
      res.render("index", {
        results: results
      });
    });
 })
}
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
