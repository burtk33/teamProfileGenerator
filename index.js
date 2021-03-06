//Dependencies
const Manager = require('.lib/Manager.js');
const Intern = require('.lib/Intern.js');
const Engineer = require('.lib/Engineer.js');
const inquirer = require('inquirer');
const fs = require('fs');


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
            if (data.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "Enter Github username: "
                    }
                ])
            }
            else if (data.role === "Intern") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "school",
                        message: "Enter college you attended: "
                    }
                ])

            }
            else {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "office",
                        message: "Enter office number: "
                    }
                ])

            }
        })
        .then((roleData)=>{
            
        })
};