const Employee = require("./Employee");

class Manager extends Employee{

    constructor(name, id, email, role, office){
        this.name=name;
        this.id=id;
        this.email=email;
        this.role=role;
        this.office=office;
    }

    getSchool(){

    }

    getRole(){

    }
}

module.exports = Manager;