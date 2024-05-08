const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Adjust this path based on the actual location of your database.js

const Employee = sequelize.define('Employee', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    managerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'employees',
            key: 'id'
        }
    }
}, 
{
sequelize,
freezeTableName: true,
timestamps: false,
}
);

module.exports = Employee;