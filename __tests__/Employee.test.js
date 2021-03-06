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
            const result = new Employee(data).getName();
            expect(result).toEqual('Robert Bob');
        });
    })

    describe("getId", () => {
        it("getId function to return employee ID", () => {
            const result = new Employee(data).getId();
            expect(result).toEqual(2);
        });
    })

    describe("getEmail", () => {
        it("getEmail function to return employee email", () => {
            const result = new Employee(dat).getEmail();
            expect(result).toEqual('bob@bob.com');
        });
    })

    describe("getRole", () => {
        it("getRole function to return Employee", () => {
            const result = new Employee(data).getRole();
            expect(result).toEqual('Employee');
        });
    })

});