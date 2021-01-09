// Requiring our models and passport as we've configured it
const { sequelize } = require("../models");
const db = require("../models");
//const offer = require("../models/offer");
var passport = require("../config/passport");

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
 
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json(
      //   {
      //     email: req.user.email,
      //     password: req.user.password
      // }
      req.user

    );
  });


};

  //   {
  //     "dateOffered": "today",
  //        "name": "Kerem",
  //        "amount": "200000",
  //        "closingDate": "tomorrow",
  //        "moneyType": "dollar",
  //        "home": true,
  //        "id": "1"
  //  }


  //   {
  //     "address": "11211 tramonto",
  //     "sellerFirstName": "Kerem",
  //     "sellerLastName": "Karaman",
  //     "UserId": "1"
  // }

  // app.post("/api/createHome", function (req, res) {
  //   const query = {};
  //   if (req.user) {
  //       query.userId = req.user.id;
  //   }
  //   db.Home.create({
  //     address: req.body.address,
  //     sellerFirstName: req.body.sellerFirstName,
  //     sellerLastName: req.body.sellerLastName,
  //     UserId: query.userId
  //   })
  //     .then(function () {
  //       // res.redirect(307, "/api/login");
  //       res.sendStatus(201)
  //     })
  //     .catch(function (err) {
  //       res.status(401).json(err);
  //     });
  // });

  //Post request for Reviews






