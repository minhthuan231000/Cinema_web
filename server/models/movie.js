
const Utils = require("../utils/utils");
module.exports = (sequelize, Datatypes) => {
  const Movie = sequelize.define("Movie", {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    image: {
      type: Datatypes.BLOB,
      allowNull: false,
    },
    trailer: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    introduce: {
      type: Datatypes.TEXT,
      allowNull: true,
    },
    opening_day: {
      type: Datatypes.DATE,
      allowNull: true,
      get: function () {
        return Utils.formatDate(this.getDataValue('opening_day'))
      }
    },
    minute_time: {
      type: Datatypes.INTEGER,
      allowNull: true
    },
    view: {
      type: Datatypes.INTEGER,
      allowNull: true,
    },
    category_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
    },
  })
  Movie.associate = function (models) {
    Movie.hasMany(models.Showtime, {
      foreignKey: 'movie_id'
    });

    Movie.belongsTo(models.Category, {
      foreignKey: 'category_id',
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      as :'category'
    });
  };
  return Movie;
};
