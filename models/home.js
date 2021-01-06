module.exports = function (sequelize, DataTypes) {
    const Home = sequelize.define("Home", {
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        listingPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateListed: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Home.associate = (db) => {
        db.Home.hasMany(db.Offer)
        db.Home.hasMany(db.Feedback)
        db.Home.belongsTo(db.User)
    }

    return Home;
};