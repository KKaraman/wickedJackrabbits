// Requiring our models and passport as we've configured it
const { sequelize } = require("../models");
const db = require("../models");
//const offer = require("../models/offer");
// var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.post("/api/login", passport.authenticate("local"), function(req, res) {
  //   res.json(req.user);
  // });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {

    db.Agent.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
    })
      .then(function () {
        // res.redirect(307, "/api/login");
        res.sendStatus(201)
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

//   {
//     "dateOffered": "today",
//        "name": "Kerem",
//        "amount": "200000",
//        "closingDate": "tomorrow",
//        "moneyType": "dollar",
//        "home": true,
//        "id": "1"
//  }

  app.post("/api/createOffer", function (req, res) {
    console.log(req.body);
    const query = {
      homeId:req.body.id
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
          HomeId : req.params.homeId
        }
      })
    
      .then(function (data) {
        // res.redirect(307, "/api/login");
        console.log("Your home ID: " + data );
        res.json(data)
      })
      .catch(function (err) {
        console.log("create offer has NOT been completed");
        res.status(500).json(err);
      });
     
  });

  app.get("/api/home_feedback/:homeId", function (req, res) {
    
    // get request for home id
    // find all offers for that home id
    console.log(req.params.homeId);

      db.Feedback.findAll({
        where: {
          HomeId : req.params.homeId
        }
      })
    
      .then(function (data) {
        // res.redirect(307, "/api/login");
        console.log("Your home ID: " + data );
        res.json(data)
      })
      .catch(function (err) {
        console.log("create offer has NOT been completed");
        res.status(500).json(err);
      });
     
  });

//   {
//     "address": "11211 tramonto",
//     "sellerFirstName": "Kerem",
//     "sellerLastName": "Karaman",
//     "UserId": "1"
// }

  app.post("/api/createHome", function (req, res) {
    const query = {};
    if (req.user) {
        query.userId = req.user.id;
    }
    db.Home.create({
      address: req.body.address,
      sellerFirstName: req.body.sellerFirstName,
      sellerLastName: req.body.sellerLastName,
      UserId: query.userId
    })
      .then(function () {
        // res.redirect(307, "/api/login");
        res.sendStatus(201)
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

};






