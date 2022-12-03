const inquirer = require('inquirer');
const mysql = require('mysql2');


// Connect to database
const sqlConnect = mysql.createConnection(
  {
    host: 'localhost',
    
    user: 'root',

    password: '19971024',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);


sqlConnect.connect(err => {
    if (err) throw err;
    startOptions();
});

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


    }
