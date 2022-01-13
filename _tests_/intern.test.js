const Intern = require('../lib/Intern')


describe('Intern', () => {
        it('Should create an object with name, ID, email, and GitHub username', () => {
            const testIntern = new Intern('Steve', '1', 'steve@test.com', 'university');
            expect(testIntern).toEqual({ firstLast: 'Steve', employeeId: '1', email: 'steve@test.com', school: 'university'});
        });
        it('Should return role of employee', () => {
            const testIntern = new Intern();
            expect(testIntern.getRole()).toEqual('Intern');
        });
});