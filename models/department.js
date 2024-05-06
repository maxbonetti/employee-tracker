const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Adjust the path to your Sequelize configuration if necessary

const Department = sequelize.define('Department', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Department;