const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Adjust the path appropriately

const Role = sequelize.define('Role', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    salary: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departments', // Make sure this is the table name as Sequelize sees it
            key: 'id'
        }
    }
});

module.exports = Role;