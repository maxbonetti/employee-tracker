const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Yourpassword', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
