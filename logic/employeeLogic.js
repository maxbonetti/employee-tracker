const { Employee, Role, Department } = require('../models');

// Function to view all employees
exports.viewAllEmployees = async () => {
    try {
        const employees = await Employee.findAll({
            include: [
                { model: Role, include: [{ model: Department }] },
                { model: Employee, as: 'Manager', attributes: ['firstName', 'lastName'] }  // Assuming self-referencing is set up
            ]
        });
        console.table(employees.map(emp => ({
            EmployeeID: emp.id,
            FirstName: emp.firstName,
            LastName: emp.lastName,
            Role: emp.Role.title,
            Department: emp.Role.Department.name,
            Manager: emp.Manager ? `${emp.Manager.firstName} ${emp.Manager.lastName}` : 'None'
        })));
    } catch (error) {
        console.error('Error retrieving employees:', error);
    }
};

// Function to add an employee
exports.addEmployee = async (firstName, lastName, roleId, managerId) => {
    try {
        const employee = await Employee.create({ firstName, lastName, roleId, managerId });
        console.log(`Added new employee: ${employee.firstName} ${employee.lastName}`);
    } catch (error) {
        console.error('Error adding employee:', error);
    }
};