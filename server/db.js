const Sequelize = require("sequelize");
require('dotenv').config({ path: '../.env' });
module.exports = new Sequelize(process.env.DATABASE_URL ,{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions:{
        // ssl: {
        //     rejectUnauthorized: false,
        //     require: 'true'
        // }
    }
});

