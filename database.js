const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_db', 'postgres', 'Yourpassword', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));
  
module.exports = sequelize;
