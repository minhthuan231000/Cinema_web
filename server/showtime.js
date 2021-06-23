const Sequelize = require('sequelize');
const db = require('./db')
const Utils = require("./utils");

const Showtime = db.define("Showtime", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "id cannot be null" }
        }
    },
    movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        validate: {
            notNull: { args: true, msg: "theater_id cannot be null" }
        }
    },
    theater_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        validate: {
            notNull: { args: true, msg: "theater_id cannot be null" }
        }
    },
    start_time: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "start_time cannot be null" }
        },
        get: function () {
            return Utils.formatDate(this.getDataValue('start_time'))
        }
    },
    end_time: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "end_time cannot be null" }
        },
        get: function () {
            return Utils.formatDate(this.getDataValue('end_time'))
        }
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "price cannot be null" }
        }
    },
});
Showtime.associate = function (models) {
    Showtime.hasMany(models.Booking, {
        foreignKey: 'showtime_id',
        sourceKey: 'id',
        as: 'bookings'
    });

    Showtime.belongsTo(models.Theater, {
        foreignKey: 'theater_id',
        as: 'theater'
    });

    Showtime.belongsTo(models.Movie, {
        foreignKey: 'movie_id',
        as: 'movie'
    });
};

module.exports = Showtime;
