const Employee = require("./Employee");

class Engineer extends Employee{

    constructor(name, id, email, role, github){
        this.name=name;
        this.id=id;
        this.email=email;
        this.role=role;
        this.github=github;
    }

    getGithub(){

    }

    getRole(){

    }
}

module.exports = Engineer;