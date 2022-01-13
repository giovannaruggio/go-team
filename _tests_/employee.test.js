const Employee = require('../lib/Employee')


describe('Employee', () => {
        it('Should create an object with name, ID, and email', () => {
            const testEmployee = new Employee('Steve', '1', 'steve@test.com');
            expect(testEmployee).toEqual({ firstLast: 'Steve', employeeId: '1', email: 'steve@test.com' });
        });
        it('Should return role of employee', () => {
            const testEmployee = new Employee();
            expect(testEmployee.getRole()).toEqual('Employee');
        });
        it('Should return undefined if given zero arugments', () => {
            const testEmployee = new Employee();
            expect(testEmployee.getName()).toEqual(undefined);
            expect(testEmployee.getID()).toEqual(undefined);
            expect(testEmployee.getEmail()).toEqual(undefined);
        });

});

