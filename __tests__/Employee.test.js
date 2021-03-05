const Employee = require("../lib/Employee.js");
const data = {
    name: 'Robert Bob',
    id: 2,
    email: 'bob@bob.com',
    role: 'Employee'
}

describe("Employee class", () => {
    describe("getName", () => {
        it("getName function to return employee name", () => {
            const result = new Employee().getName(data);
            expect(result).toEqual('Robert Bob');
        });
    })

    describe("getId", () => {
        it("getId function to return employee ID", () => {
            const result = new Employee().getId(data);
            expect(result).toEqual(2);
        });
    })

    describe("getEmail", () => {
        it("getEmail function to return employee email", () => {
            const result = new Employee().getEmail(data);
            expect(result).toEqual('bob@bob.com');
        });
    })

    describe("getRole", () => {
        it("getRole function to return Employee", () => {
            const result = new Employee().getRole(data);
            expect(result).toEqual('Employee');
        });
    })

});