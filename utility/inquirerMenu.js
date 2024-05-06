const inquirer = require('inquirer');
const departmentLogic = require('../logic/departmentLogic');
const roleLogic = require('../logic/roleLogic');
const employeeLogic = require('../logic/employeeLogic');

function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Exit'
        ]
    }).then(answers => {
        switch (answers.choice) {
            case 'View All Departments':
                departmentLogic.viewAllDepartments()
                    .then(() => mainMenu());
                break;
            case 'View All Roles':
                roleLogic.viewAllRoles()
                    .then(() => mainMenu());
                break;
            case 'View All Employees':
                employeeLogic.viewAllEmployees()
                    .then(() => mainMenu());
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Exit':
                console.log('Goodbye, will exit now.');
                process.exit();
        }
    }).catch(err => console.error(`An error occurred: ${err}`));
}

function addDepartment() {
    inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the name of the new department:'
    }).then(answer => {
        departmentLogic.addDepartment(answer.name).then(() => mainMenu());
    });
}

function addRole() {
    inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'Enter new role title:'
    }, {
        type: 'input',
        name: 'salary',
        message: 'Enter new role salary amount:'
    }, {
        type: 'input',
        name: 'departmentId',
        message: 'Enter department ID for new role:'
    }]).then(answers => {
        roleLogic.addRole(answers.title, answers.salary, answers.departmentId)
            .then(() => mainMenu());
    });
}

function addEmployee() {
    inquirer.prompt([{
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the new employee:'
    }, {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the new employee:'
    }, {
        type: 'input',
        name: 'roleId',
        message: 'Enter the role ID for the new employee:'
    }, {
        type: 'input',
        name: 'managerId',
        message: 'Enter the manager ID for the new employee (leave blank if none):'
    }]).then(answers => {
        employeeLogic.addEmployee(answers.firstName, answers.lastName, answers.roleId, answers.managerId || null)
            .then(() => mainMenu());
    });
}

module.exports = { mainMenu };