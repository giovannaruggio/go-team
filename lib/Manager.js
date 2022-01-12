class Manager {
    constructor(firstLast, employeeId, email, officeNum) {
        this.firstLast = firstLast;
        this.employeeId = employeeId;
        this.email = email;
        this.officeNum = officeNum;
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
    getGitHub() {
        return this.officeNum;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;