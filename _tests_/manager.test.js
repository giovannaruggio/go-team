const Manager = require('../lib/Manager')


describe('Manager', () => {
        it('Should create an object with name, ID, email, and office number', () => {
            const testManager = new Manager('Steve', '1', 'steve@test.com', '000-000-0000');
            expect(testManager).toEqual({ firstLast: 'Steve', employeeId: '1', email: 'steve@test.com', officeNum: '000-000-0000'});
        });
        it('Should return role of employee', () => {
            const testManager = new Manager();
            expect(testManager.getRole()).toEqual('Manager');
        });
});