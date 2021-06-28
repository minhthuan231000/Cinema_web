const Sequelize = require("sequelize");
require('dotenv').config({ path: '../.env' });
module.exports = new Sequelize(process.env.DATABASE_URL ||'postgres://postgres:2039@localhost:5432/ltw2',{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions:{
        // ssl: {
        //     rejectUnauthorized: false,
        //     require: 'true'
        // }
    }
});

