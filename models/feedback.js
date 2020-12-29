module.exports = function (sequelize, DataTypes) {
    const  Feedback = sequelize.define("Feedback", {
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

    Feedback.associate = (db) => {
        db.Feedback.belongsTo(db.Home)
    }

    return Feedback;
};