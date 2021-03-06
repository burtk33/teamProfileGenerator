const Intern = require("../lib/Intern.js");
const data = {
    name: 'Robert Bob',
    id: 2,
    email: 'bob@bob.com',
    school: 'UPenn'
}

describe("Intern subclass", () => {

    describe("getSchool", () => {
        it("getSchool function to return intern school", () => {
            const result = new Intern(data.name, data.id, data.email, data.school).getSchool();
            expect(result).toEqual('UPenn');
        });
    })

    describe("getRole", () => {
        it("getRole function to return Intern", () => {
            const result = new Intern(data.name, data.id, data.email, data.school).getRole();
            expect(result).toEqual('Intern');
        });
    })

});