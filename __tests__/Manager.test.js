const Engineer = require("../lib/Manager.js");
const data = {
    name: 'Robert Bob',
    office: 3,
    role: 'Employee'
}

describe("Manager subclass", () => {

    describe("getOffice", () => {
        it("getOffice function to return employee Github username", () => {
            const result = new Manager().getOffice(data);
            expect(result).toEqual(3);
        });
    })

    describe("getRole", () => {
        it("getRole function to return Manager", () => {
            const result = new Manager().getRole(data);
            expect(result).toEqual('Manager');
        });
    })

});