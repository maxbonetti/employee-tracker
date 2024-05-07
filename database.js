const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_db', 'postgres', 'Yourpassword', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
