const express = require("express");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 8001;
const passport = require("passport");
const compression = require("compression");


const db = require("./models");

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/api-routes")(app);




db.sequelize.sync({ /*force: true*/ }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is live on http://localhost:${PORT} !`)
    });
});