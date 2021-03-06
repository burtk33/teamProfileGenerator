//Dependencies
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const inquirer = require('inquirer');
const fs = require('fs');
const teamArray = [];

function inputTeamMember() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter team member name: "
            },
            {
                type: "input",
                name: "id",
                message: "Enter team member ID: "
            },
            {
                type: "input",
                name: "email",
                message: "Enter team member email: "
            },
            {
                type: "list",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"],
                message: "Select team member role"
            }
        ])
        .then((data) => {
            console.log(data.role);
            if (data.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "Enter Github username: "
                    }
                ])
                    .then((github) => {
                        let newMember = new Engineer(data.name, data.id, data.email, github);
                        teamArray.push(newMember);
                        addUser();
                    })
            }
            else if (data.role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "Enter college you attended: "
                    }
                ])
                    .then((school) => {
                        let newMember = new Intern(data.name, data.id, data.email, school);
                        teamArray.push(newMember);
                        addUser();
                    })

            }
            else {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "office",
                        message: "Enter office number: "
                    }
                ])
                    .then((office) => {
                        let newMember = new Engineer(data.name, data.id, data.email, office);
                        teamArray.push(newMember);
                        addUser();
                    })

            }
        })
};

function addUser() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "newMember"
        }
    ]).then((data) => {
        console.log(data.newMember);
        if (data.newMember === true) {
            inputTeamMember();
        }
        else {
            generateHTML();
        }
    });
}

inputTeamMember();