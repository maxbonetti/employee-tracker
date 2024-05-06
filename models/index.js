const Sequelize = require('sequelize');
const config = require('../config/config.js');

// Create a new instance of Sequelize
const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
        logging: false  // Toggle console logging
    }
);

const db = {};

// Import models
db.Department = require('./department')(sequelize, Sequelize.DataTypes);
db.Role = require('./role')(sequelize, Sequelize.DataTypes);
db.Employee = require('./employee')(sequelize, Sequelize.DataTypes);

// Set up relationships
db.Department.hasMany(db.Role, { foreignKey: 'departmentId' });
db.Role.belongsTo(db.Department, { foreignKey: 'departmentId' });

db.Role.hasMany(db.Employee, { foreignKey: 'roleId' });
db.Employee.belongsTo(db.Role, { foreignKey: 'roleId' });

db.Employee.belongsTo(db.Employee, { as: 'Manager', foreignKey: 'managerId' });

// Export the sequelize connection instance and all models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;