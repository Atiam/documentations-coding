const Sequelize = require('sequelize');

// Create a connection object
const sequelize = new Sequelize(
  // Database name
  'library_db',
  // User
  'postgres',
  // Password
  'root',
  {
    // Database location
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;
