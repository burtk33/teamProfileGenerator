const Intern = require("../lib/Intern.js");
const data = {
    name: 'Robert Bob',
    school: 'UPenn',
    role: 'Employee'
}

describe("Intern subclass", () => {

    describe("getSchool", () => {
        it("getSchool function to return intern school", () => {
            const result = new Intern(data).getSchool();
            expect(result).toEqual('UPenn');
        });
    })

    describe("getRole", () => {
        it("getRole function to return Intern", () => {
            const result = new Intern(data).getRole();
            expect(result).toEqual('Intern');
        });
    })

});