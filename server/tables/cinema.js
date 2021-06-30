const Sequelize = require('sequelize');
const db = require('../db')
const Utils = require("./utils");

const Cinema = db.define("Cinema", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

Cinema.associate = function (models) {
  Cinema.hasMany(models.Theater, {
    foreignKey: 'cinema_id',
    sourceKey: 'id',
    as: 'theaters'
  });
};

module.exports = Cinema;