module.exports = function (sequelize, DataTypes) {
    const  Offer = sequelize.define("Offer", {
        DateOffered: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        closingDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        moneyType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Offer.associate = (db) => {
        db.Offer.belongsTo(db.Home)
    }

    return Offer;
};