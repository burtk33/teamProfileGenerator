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
            if (data.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "github",
                        message: "Enter Github username: "
                    }
                ])
                    .then((roleField) => {
                        let newMember = new Engineer(data.name, data.id, data.email, roleField.github);
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
                    .then((roleField) => {
                        let newMember = new Intern(data.name, data.id, data.email, roleField.school);
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
                    .then((roleField) => {
                        let newMember = new Manager(data.name, data.id, data.email, roleField.office);
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
        if (data.newMember === true) {
            inputTeamMember();
        }
        else {
            generateHTML();
        }
    });
}

function generateHTML() {
    const startHtml = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <title>Team Profile Generator</title>
    
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    
    </head>
    
    <body>
      <header class="navbar navbar-dark bg-dark">
        <div class="container justify-content-center text-white ms-auto">
          <h1>Team Profile Generator</h1>
        </div>
      </header>
      <div class="container">
        <div class="row">
    `
    fs.writeFileSync('./dist/team.html', startHtml, (err) =>

        err ? console.error(err) : console.log(`Start HTML Generate`)
    )

    for (i = 0; i < teamArray.length; i++) {
        let identify = teamArray[i].getRole();
        let memberEmail = teamArray[i].getEmail();
        let memberId = teamArray[i].getId();
        let memberName = teamArray[i].getName();

        if (identify === "Manager") {
            let memberCard = `
            <div class="col-sm-4">
            <div class="card my-4" style="width: 18rem;">
              <div class="card-header text-white bg-primary">
                <h4 class="card-title bg-primary text-white">${memberName}</h4>
                <h6 class="card-subtitle mb-2 bg-primary text-white">${identify}</h6>
                <div class="card-body bg-white text-dark">
                  <ul>
                    <li>ID: ${memberId}</li>
                    <li><a href="mailto:${memberEmail}">Email: ${memberEmail}</a></li>
                    <li>Office: ${teamArray[i].getOffice()}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            `
            fs.appendFile('./dist/team.html', memberCard, (err) =>

                err ? console.error(err) : console.log(`Team member added`)
            )
        }
        else if (identify === "Engineer") {
            let memberCard = `
            <div class="col-sm-4">
            <div class="card my-4" style="width: 18rem;">
              <div class="card-header text-white bg-primary">
                <h4 class="card-title bg-primary text-white">${memberName}</h4>
                <h6 class="card-subtitle mb-2 bg-primary text-white">${identify}</h6>
                <div class="card-body bg-white text-dark">
                  <ul>
                    <li>ID: ${memberId}</li>
                    <li><a href="mailto:${memberEmail}">Email: ${memberEmail}</a></li>
                    <li><a href="https://github.com/${teamArray[i].getGithub()}">Github: ${teamArray[i].getGithub()}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            `
            fs.appendFile('./dist/team.html', memberCard, (err) =>

                err ? console.error(err) : console.log(`Team member added`)
            )
        }
        else {
            let memberCard = `
            <div class="col-sm-4">
            <div class="card my-4" style="width: 18rem;">
              <div class="card-header text-white bg-primary">
                <h4 class="card-title bg-primary text-white">${memberName}</h4>
                <h6 class="card-subtitle mb-2 bg-primary text-white">${identify}</h6>
                <div class="card-body bg-white text-dark">
                  <ul>
                    <li>ID: ${memberId}</li>
                    <li><a href="mailto:${memberEmail}">Email: ${memberEmail}</a></li>
                    <li>School: ${teamArray[i].getSchool()}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            `
            fs.appendFile('./dist/team.html', memberCard, (err) =>

                err ? console.error(err) : console.log(`Team member added`)
            )
        }

    }
    const endHtml = `
    </div>
  </div>

</body>

</html>
    `
    fs.appendFile('./dist/team.html', endHtml, (err) =>

        err ? console.error(err) : console.log(`HTML page generated successfully`)
    )
}

inputTeamMember();