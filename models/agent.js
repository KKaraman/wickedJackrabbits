const bcrypt = require("bcrypt");

module.exports = function (sequelize, DataTypes) {
    const Agent = sequelize.define("Agent", {
        firstName: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                isNumeric: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Agent.prototype.validatePassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    Agent.addHook("beforeCreate", (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    Agent.associate = (db) => {
        db.Agent.hasMany(db.User)
    }

    return Agent;
}