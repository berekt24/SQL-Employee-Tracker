const connection = require('./connection')

class Db {
    constructor(connection) {
        this.connection = connection;
    }
    findAllEmployees() {
        return this.connection.promise().query('SELECT * FROM employees;')
    }
    findAllRoles() {
        return this.connection.promise().query('SELECT * FROM roles;')
    }
    findAllDepartments() {
        return this.connection.promise().query('SELECT * FROM department;')
    }
    addEmployee(employeeData) {
        return this.connection.promise().query('INSERT INTO employees set ?', employeeData)
    }
    addRole(employeeData) {
        return this.connection.promise().query('INSERT INTO roles set ?', employeeData)
    }
    addDepartment(employeeData) {
        return this.connection.promise().query('INSERT INTO department set ?', employeeData)
    }
}


module.exports = new Db (connection);