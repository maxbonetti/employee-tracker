const sequelize = require('../database');
const Sequelize = require('sequelize');

const Department = require('./department');
const Role = require('./role');
const Employee = require('./employee');

// const db = {
//   sequelize,
//   Sequelize,
//   Department,
//   Role,
//   Employee
// };

// Setup relationships
Department.hasMany(Role, { foreignKey: 'departmentId' });
Role.belongsTo(Department, { foreignKey: 'departmentId' });

module.exports = { Role, Department, Employee };