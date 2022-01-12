class Engineer {
    constructor(firstLast, employeeId, email, githubUser) {
        this.firstLast = firstLast;
        this.employeeId = employeeId;
        this.email = email;
        this.githubUser = githubUser;
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
        return this.githubUser;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;