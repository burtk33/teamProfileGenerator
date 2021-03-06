const Engineer = require("../lib/Engineer.js");
const data = {
    name: 'Robert Bob',
    github: 'bobert33',
    email: 'bob@bob.com',
    role: 'Employee'
}

describe("Engineer subclass", () => {

    describe("getGithub", () => {
        it("getGithub function to return engineer Github username", () => {
            const result = new Engineer(data).getGithub();
            expect(result).toEqual('bobert33');
        });
    })

    describe("getRole", () => {
        it("getRole function to return Engineer", () => {
            const result = new Engineer(data).getRole();
            expect(result).toEqual('Engineer');
        });
    })

});