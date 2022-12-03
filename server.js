const inquirer = require('inquirer');
const Db = require('./db/index.js')
const consoleTable = require('console.table');

const startOptions = () => {
    inquirer
        .prompt({
            name: 'choose',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'view all employees',
                'add employee',
                'update employee role',
                'view all roles',
                'add role',
                'view all departments',
                'add department',
                'exit'
            ]
        })
        .then((choose) => {
            switch (choose.choose) {
                case 'view all employees':
                    viewAllEmployees();
                    break;
                case 'add employee':
                    addEmployee();
                    break;
                case 'update employee role':
                    updateEmployeeRole();
                    break;
                case 'view all roles':
                    viewAllRoles();
                    break;
                case 'add role':
                    addRole();
                    break;
                case 'view all departments':
                    viewAllDepartments();
                    break;
                case 'add department':
                    addDepartment();
                    break;
                case 'Exit':
                    connection.end();
            } 
        }) 
    }
    function viewAllEmployees() {
        Db.findAllEmployees().then(([data]) => {
            console.table(data);
        }).then(() => startOptions())
    }
    function viewAllRoles() {
        Db.findAllRoles().then(([data]) => {
            console.table(data);
        }).then(() => startOptions())
    }
    function viewAllDepartments() {
        Db.findAllDepartments().then(([data]) => {
            console.table(data);
        }).then(() => startOptions())
    }
    function addEmployee() {
        inquirer
        .prompt([
            {
                name: 'first_name',
                type: 'input',
                message: 'What is your first name?',

            },
            {
                name: 'last_name',
                type: 'input',
                message: 'What is your last name?',
            },
            {
                name: 'roles_id',
                type: 'list',
                message: 'What is your role id?',
                choices: ['1', '2', '3', '4','5']
            },
            {
                name: 'manager_id',
                type: 'list',
                message: 'What is your manager id?',
                choices: ['1', '2', '3', '4','5']
            },
        ]).then((answers) => {
            Db.addEmployee(answers).then(([data]) => {
                console.table(data);
            }).then(() => startOptions())
        })
    }

        function addRole() {
            inquirer
            .prompt([
                {
                    name: 'title',
                    type: 'input',
                    message: 'What is your title?',
    
                },
                {
                    name: 'salary',
                    type: 'input',
                    message: 'What is your salary?',
                },
                {
                    name: 'department_id',
                    type: 'list',
                    message: 'What is your department id?',
                    choices: ['1', '2', '3', '4','5']
                },
               
            ]).then((answers) => {
                Db.addRole(answers).then(([data]) => {
                    console.table(data);
                }).then(() => startOptions())
            }) 
        }

            function addDepartment() {
            inquirer
            .prompt([
                {
                    name: 'department_name',
                    type: 'input',
                    message: 'What is your title?',
    
                },
                {
                    name: 'roles_id',
                    type: 'list',
                    message: 'What is your role id?',
                    choices: ['1', '2', '3', '4','5']
                },
               
            ]).then((answers) => {
                Db.addDepartment(answers).then(([data]) => {
                    console.table(data);
                }).then(() => startOptions())
            })  
    }



    startOptions();