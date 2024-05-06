const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Ensure this is the correct path to your Sequelize instance

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
            model: 'Departments',
            key: 'id'
        }
    }
});

Role.associate = (models) => {
    Role.belongsTo(models.Department, {
        foreignKey: 'departmentId'
    });
};

module.exports = Role;