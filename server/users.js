const db = require('./db');
const { DataTypes } = require('sequelize');
const User = db.define('User', {
    // Model attributes are defined here
    email: { 
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    fullname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    numphone:{
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
  });
User.findByEmail = async function(email){
    return User.findOne({
        where:{
            email,
        },
    }); 
};

User.findById = async function(id){
    return User.findByPk(id);
};
module.exports = User;