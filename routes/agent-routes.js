const { sequelize } = require("../models");
const db = require("../models");

module.exports = function (app) {
    app.get("/api/agents/:agentId", function (req, res) {

        // get request for home id
        // find all offers for that home id
        console.log(req.params.agentId);
    
        db.Offer.findAll({
          where: {
            agentsId: req.params.agentId
          }
        })
    
          .then(function (data) {
            // res.redirect(307, "/api/login");
            console.log("Your agent ID: " + data);
            res.json(data)
          })
          .catch(function (err) {
            console.log("agents has NOT been completed");
            res.status(500).json(err);
          });
    
      });
}