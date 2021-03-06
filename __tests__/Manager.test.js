const Manager = require("../lib/Manager.js");
const data = {
    name: 'Robert Bob',
    id: 2,
    email: 'bob@bob.com',
    office: 3
}

describe("Manager subclass", () => {

    describe("getOffice", () => {
        it("getOffice function to return manager office number", () => {
            const result = new Manager(data.name, data.id, data.email, data.office).getOffice();
            expect(result).toEqual(3);
        });
    })

    describe("getRole", () => {
        it("getRole function to return Manager", () => {
            const result = new Manager(data.name, data.id, data.email, data.office).getRole();
            expect(result).toEqual('Manager');
        });
    })

});