class Employee {
    constructor(firstLast, employeeId, email) {
        this.firstLast = firstLast;
        this.employeeId = employeeId;
        this.email = email;
    }
    getName() {
        return this.firstLast;
    }
    getID() {
        return this.employeeId;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;