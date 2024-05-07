const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');  // Make sure this path is correct

class Department extends Model {}

Department.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Department'
});

module.exports = Department;