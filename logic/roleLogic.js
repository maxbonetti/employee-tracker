const { Role, Department } = require('../models');
// //View all roles
// exports.viewAllRoles = async () => {
//     try {
//         const roles = await Role.findAll({
//             include: [{model:Department, attributes:['name']}]
//         });
//         console.table(roles.map(role => ({
//             RoleId: role.id,
//             Title: role.title,
//             Salary: role.salary,
//             Department: role.Department.name
//         })));
//     } catch (err) {
//         console.error(`An error occurred: ${err}`);
//     }
// };
//Function to add a role
exports.addRole = async (title, salary, departmentId) => {
    try {
        const role = await Role.create({ title, salary, departmentId });
        console.log(`Added a new role: ${role.title}`);
    } catch (error) {
        console.error(`An error occurred: ${error}`);
    }
};
exports.viewAllRoles = async () => {
    try {
        const roles = await roles.findAll({
            include: [{model: Department, attributes: ['name']}]
        });
        console.table(roles.map(roles => ({
            RoleId: roles.id,
            Title: roles.title,
            Salary: roles.salary,
            Department: roles.Department.name
        })));
    } catch (err) {
        console.error(`An error occurred when retrieving roles: ${err.message}`);
    }
};