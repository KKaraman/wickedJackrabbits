module.exports = function (sequelize, DataTypes) {
    const  Feedback = sequelize.define("Feedback", {
        dateShown: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        local: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        family: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timeline: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        liked: {
            type: DataTypes.STRING,
            allowNull: true
        },
        notLike: {
            type: DataTypes.STRING,
            allowNull: true
        },
        estimatedInterest: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Feedback.associate = (db) => {
        db.Feedback.belongsTo(db.Home)
    }

    return Feedback;
};