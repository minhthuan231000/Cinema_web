const Sequelize = require('sequelize');
const db = require('./db');
const Utils = require("./utils");
const Movie = db.define("Movie", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.BLOB,
    allowNull: false,
  },
  trailer: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  introduce: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  opening_day: {
    type: Sequelize.DATE,
    allowNull: true,
    get: function () {
      return Utils.formatDate(this.getDataValue('opening_day'))
    }
  },
  minute_time: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  view: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

Movie.associate = function (models) {
  Movie.hasMany(models.Showtime, {
    foreignKey: 'movie_id',
    as: 'showtimes'
  });
};


module.exports = Movie;
