const Sequelize = require("sequelize");
module.exports = new Sequelize(process.env.DATABASE_URL ||'postgres://postgres:2039@localhost:5432/doancuoiky',{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions:{
        // ssl: {
        //     rejectUnauthorized: false,
        //     require: 'true'
        // }
    }
});

