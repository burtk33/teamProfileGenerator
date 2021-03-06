const Engineer = require("../lib/Engineer.js");
const data = {
    name: 'Robert Bob',
    id: 2,
    email: 'bob@bob.com',
    github: 'bobert45'
}

describe("Engineer subclass", () => {

    describe("getGithub", () => {
        it("getGithub function to return engineer Github username", () => {
            const result = new Engineer(data.name, data.id, data.email, data.github).getGithub();
            expect(result).toEqual('bobert45');
        });
    })

    describe("getRole", () => {
        it("getRole function to return Engineer", () => {
            const result = new Engineer(data.name, data.id, data.email, data.github).getRole();
            expect(result).toEqual('Engineer');
        });
    })

});