// Requiring our models and passport as we've configured it
const { sequelize } = require("../models");
const db = require("../models");
//const offer = require("../models/offer");
// var passport = require("../config/passport");

module.exports = function (app) {
  app.get("/api/home_feedback/:homeId", function (req, res) {

    // get request for home id
    // find all offers for that home id
    console.log(req.params.homeId);

    db.Feedback.findAll({
      where: {
        HomeId: req.params.homeId
      }
    })

      .then(function (data) {
        // res.redirect(307, "/api/login");
        console.log("Your home ID: " + data);
        res.json(data)
      })
      .catch(function (err) {
        console.log("create offer has NOT been completed");
        res.status(500).json(err);
      });

  });

  app.post("/api/createFeedback", function (req, res) {
    console.log(req.body);
    const query = {
      homeId: req.body.id
    };
    if (req.body.home) {
      query.homeId = req.body.id;
    }
    console.log("Home ID", query.homeId);
    db.Feedback.create({
      dateShown: req.body.dateShown,
      name: req.body.name,
      local: req.body.local,
      family: req.body.family,
      timeline: req.body.timeline,
      liked: req.body.liked,
      notLike: req.body.notLiked,
      estimatedInterest: req.body.estimatedInterest,
      HomeId: query.homeId
    })
      .then(function () {
        // res.redirect(307, "/api/login");
        console.log("create offer has been completed");
        res.sendStatus(200)
      })
      .catch(function (err) {
        console.log("create offer has NOT been completed");
        res.status(500).json(err);
      });

  });



};






