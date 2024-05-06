const Department = require('../models/department');
//View all departments
exports.viewAllDepartments = async () => {
    try {
        const departments = await Department.findAll();
        console.table(departments.map(dept => dept.toJSON()));
    } catch (error) {
        console.error('Error retrieving departments:', error);
    }
};

// Function to add a department
exports.addDepartment = async (deptName) => {
    try {
        const department = await Department.create({ name: deptName });
        console.log(`Added new department: ${department.name}`);
    } catch (error) {
        console.error('Error adding department:', error);
    }
};
