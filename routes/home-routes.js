// Requiring our models and passport as we've configured it
const { sequelize } = require("../models");
const db = require("../models");
//const offer = require("../models/offer");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var isAgent = require("../config/middleware/isAgent");

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
 
  app.get("/api/getHome/:id", (request, response) => {
    db.Home.findOne({ where: { id: request.params.id }, include: [{ model: db.Feedback }, { model: db.Offer }] }).then(result => {
      console.log("This is the Home result", result);
      response.json({ result })
    }).catch(err => {
      console.log("Get home wasn't completed");
      response.status(500).json(err);
    })
  });

  app.get("/api/getHomes/:id", (request, response) => {
    // db.Agent.findOne({ where: { id: request.params.id }, include: [{ model: db.User }, { model: db.Home }, { model: db.Feedback }, { model: db.Offer }] }).then(result => {
      db.Agent.findOne({ where: { id: request.params.id }, include: [{all: true, nested: true}] }).then(result => {
      console.log("This is the Home result", result);
      response.json({ result })
    }).catch(err => {
      console.log("Get home wasn't completed");
      response.status(500).json(err);
    })
  });

  app.post("/api/createHome", isAuthenticated, isAgent, function (req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      //Once passport is complete we need to change this to req.user.id
      AgentId: req.body.AgentId
    })
      .then(function (newUser) {
        console.log(newUser)
        db.Home.create({
          address: req.body.address,
          listingPrice: req.body.listingPrice,
          dateListed: req.body.dateListed,
          UserId: newUser.dataValues.id
        })
      }).then(function(){
        res.sendStatus(200)
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.put("/api/updateHome", (req, res)=>{
    db.Home.update(req.body,{
      where:{
        id: req.body.id
      }
    }).then(()=>{
      console.log("Update Home Complete");
      res.sendStatus(200)
    })
  })

  app.delete("/api/deleteHome/:id", (req, res)=>{
    db.Home.destroy({
      where:{
        id: req.params.id
      }
    }).then(()=>{
      console.log("Delete Home Complete");
      res.sendStatus(200)
    })
  })

};








