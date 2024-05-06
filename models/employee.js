const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Ensure this points to your Sequelize configuration

const Employee = sequelize.define('Employee', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Roles',
            key: 'id'
        }
    },
    managerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Employees',
            key: 'id'
        }
    }
});

Employee.associate = (models) => {
    Employee.belongsTo(models.Role, {
        foreignKey: 'roleId'
    });
    Employee.belongsTo(models.Employee, {
        as: 'Manager',
        foreignKey: 'managerId'
    });
};

module.exports = Employee;