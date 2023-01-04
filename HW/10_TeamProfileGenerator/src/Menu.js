const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const inquirer = require("inquirer");
const fs = require('fs');

class Menu {
    constructor() {
        this.list = [];
    }

    startWritten() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'As a manager, please type in your name: \n',
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'And your working ID: \n',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address: \n',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter your Office number: \n',
            }
            // {
            //     type: 'list',
            //     name: 'menu',
            //     message: "Choose your project License: ",
            //     choices: ['MIT', 'GNU'],
            // }
        ])
        .then(val => {
            const managerInfo = new Manager(val.managerName, val.managerID, val.email, val.officeNumber);
            this.list.push(managerInfo);
            console.log("**List", this.list);
            this.chooseMember();
        });
    }

    chooseMember() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'job',
                message: "Please choose a worker categorized by jobs into your team:",
                choices: ['Engineer', 'Intern', 'Finish building team'],
            }
        ])
        .then(val => {
            console.log("** job is:", val.job );
            switch (val.job) {
                case "Engineer":
                    this.addEngineer();
                    break;
                case "Manager":
                    this.addManager();
                    break;
                case "Intern":
                    this.addIntern();
                    break;
                case "Finish building team":
                    this.fillHTML(this.list);
                    break;
            };
        });
    }

    addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please type in your Engineer's name: \n",
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "And your Engineer's working ID: \n",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your Engineer's email address: \n",
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: "Please enter your Engineer's Github username: \n",
            }
        ])
        .then(val => {
            const engineerInfo = new Engineer(val.engineerName, val.engineerID, val.email, val.githubUsername);
            this.list.push(engineerInfo);
            console.log("**engineer list", this.list);
            this.chooseMember();
        })
    }

    addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please type in your Intern's name: \n",
            },
            {
                type: 'input',
                name: 'internID',
                message: "And your Intern's working ID: \n",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your Intern's email address: \n",
            },
            {
                type: 'input',
                name: 'githubUsername',
                message: "Please enter your Intern's school name: \n",
            }
        ])
        .then(val => {
            const internInfo = new Intern(val.internName, val.internID, val.email, val.githubUsername);
            this.list.push(internInfo);
            console.log("**intern list", this.list);
            this.chooseMember();
        })
    }

    fillHTML(listInfo) {
        console.log("================");
        console.log(listInfo);
        console.log("try extract first name:");
        console.log(listInfo[0].name);

        var htmlContent = "";

        htmlContent += `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./dist/style.css">
            <title>Document</title>
        </head>
            <body>
                <header><h1>My Team</h1></header>
            </body>
            <i class="fas fa-band-aid"></i>
            <main class="container">
                <section class="row justify-content-around">
                `;

        for (let i = 0; i < listInfo.length; i++) {
            let job;
            switch (listInfo[i].job) {
                case "Manager":
                    job = `Office Number: ${listInfo[i].typical}`;
                    break;
                case "Engineer":
                    job = `Github: <a href="https://www.github.com/${listInfo[i].typical}">${listInfo[i].typical}</a>`;
                    break;
                case "Intern":
                    job = `School: ${listInfo[i].typical}`;
                    break;
            }

            htmlContent += `
            <div class="col-12 col-sm-6 col-lg-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                      <h5 class="card-title">${listInfo[i].name}</h5>
                      <p class="card-text">${listInfo[i].job}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${listInfo[i].id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${listInfo[i].email}">${listInfo[i].email}</a></li>
                      <li class="list-group-item">${job}</li>
                    </ul>
                </div>
            </div>
            `;
        };

        htmlContent += `
                </section>
        
            </main>
        </html>`

        fs.writeFileSync("index.html", htmlContent);
    }
}

module.exports = Menu;