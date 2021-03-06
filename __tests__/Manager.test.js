const Manager = require("../lib/Manager.js");
const data = {
    name: 'Robert Bob',
    office: 3,
    role: 'Employee'
}

describe("Manager subclass", () => {

    describe("getOffice", () => {
        it("getOffice function to return manager office number", () => {
            const result = new Manager(data).getOffice();
            expect(result).toEqual(3);
        });
    })

    describe("getRole", () => {
        it("getRole function to return Manager", () => {
            const result = new Manager(data).getRole();
            expect(result).toEqual('Manager');
        });
    })

});