class Intern {
    constructor(firstLast, employeeId, email, school) {
        this.firstLast = firstLast;
        this.employeeId = employeeId;
        this.email = email;
        this.school = school;
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
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;