const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  //Database name
  process.env.DB_NAME,
  //User
  process.env.DB_USER,
  //Password
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
