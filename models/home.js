module.exports = function (sequelize, DataTypes) {
    const Home = sequelize.define("Home", {
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sellerFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sellerLastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Home.associate = (db) => {
        db.Home.hasMany(db.Offer)
    }

    return Home;
};