const Engineer = require('../lib/Engineer')


describe('Engineer', () => {
        it('Should create an object with name, ID, email, and GitHub username', () => {
            const testEngineer = new Engineer('Steve', '1', 'steve@test.com', 'githubsteve');
            expect(testEngineer).toEqual({ firstLast: 'Steve', employeeId: '1', email: 'steve@test.com', githubUser: 'githubsteve'});
        });
        it('Should return role of employee', () => {
            const testEngineer = new Engineer();
            expect(testEngineer.getRole()).toEqual('Engineer');
        });
});