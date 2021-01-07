// Requiring our models and passport as we've configured it
const { sequelize } = require("../models");
const db = require("../models");
//const offer = require("../models/offer");
// var passport = require("../config/passport");

module.exports = function (app) {
 
  app.post("/api/createOffer", function (req, res) {
    console.log(req.body);
    const query = {
      homeId: req.body.id
    };
    if (req.body.home) {
      query.homeId = req.body.id;
    }
    console.log(query.homeId);
    console.log(req.body.id);
    db.Offer.create({
      dateOffered: req.body.dateOffered,
      name: req.body.name,
      amount: req.body.amount,
      closingDate: req.body.closingDate,
      moneyType: req.body.moneyType,
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

  app.get("/api/home_offers/:homeId", function (req, res) {

    // get request for home id
    // find all offers for that home id
    console.log(req.params.homeId);

    db.Offer.findAll({
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

  app.put("/api/updateOffer", (req, res)=>{
    db.Offer.update(req.body,{
      where:{
        id: req.body.id
      }
    }).then(()=>{
      console.log("Update Offer Complete");
      res.sendStatus(200)
    })
  })

  app.delete("/api/deleteOffer/:id", (req, res)=>{
    db.Offer.destroy({
      where:{
        id: req.params.id
      }
    }).then(()=>{
      console.log("Delete Feedback Complete");
      res.sendStatus(200)
    })
  })





};






