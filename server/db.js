const Sequelize = require("sequelize");
require('dotenv').config({ path: '../.env' });
module.exports = new Sequelize(process.env.DATABASE_URL ||'postgres://postgres:thuan123@localhost:5432/doancuoiky',{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions:{
        // ssl: {
        //     rejectUnauthorized: false,
        //     require: 'true'
        // }
    }
});

