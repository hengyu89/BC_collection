const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

class Menu {
    constructor() {
        this.list = [];
    }

    StartMenu() {
        console.log("\nWelcome to the Team Profile Generator, here you can save the employee's information and generate website automatically.");
        console.log("Please fill information of employees to save the data.");
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: 'Manager, please fill your first name: \n',
                },
                {
                    type: 'number',
                    name: 'managerID',
                    message: 'Fill your ID: \n',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Your email address: \n',
                    validate: function(email) {
                        // Regex mail check (return true if valid mail)
                        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    },
                },
                {
                    type: 'number',
                    name: 'officeNumber',
                    message: 'Your office number: \n',
                }
            ])
            .then(val => {
                const managerInfo = new Manager(val.managerID, val.managerName, val.email, val.officeNumber);
                this.list.push(managerInfo);
                console.log('****', this.list);
                this.chooseMember();
            })
    }

    chooseMember() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'job',
                message: "Which filed of worker would you like to add?\n",
                choices: ['Engineer', 'Intern', 'Finish building team'],
            }
        ])
        .then(val => {
            if(val.job == "Finish building team") {
                this.fillHTML(this.list);
            } else {
                this.addMember(val.job);
            };
        })
    }

    addMember(job) {
        switch(job) {
            case 'Engineer':
                var specialInfo = 'Github account';
                break;
            case 'Intern':
                var specialInfo = 'School name';
                break;
        };
        inquirer.prompt([
            {
                type: 'input',
                name: 'workerName',
                message: `Please fill this ${job}'s name: \n`,
            },
            {
                type: 'number',
                name: 'workerID',
                message: `And your ${job}'s working ID: \n`,
            },
            {
                type: 'input',
                name: 'email',
                message: `Also your ${job}'s email address: \n`,
            },
            {
                type: 'input',
                name: 'specialInfo',
                message: `Fill your ${job}'s ${specialInfo}: \n`,
            }
        ])
        .then(val => {
            if (job == 'Engineer') {
                var workerInfo = new Engineer(val.workerID, val.workerName, val.email, val.specialInfo);
            } else {
                var workerInfo = new Intern(val.workerID, val.workerName, val.email, val.specialInfo);
            };
            this.list.push(workerInfo);
            // console.log("***worker lise:", this.list);
            this.chooseMember();
        })
    }

    fillHTML(workersInfo) {
        var htmlContent = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
            <title>Document</title>
        </head>
            <body>
                <header><h1>My Team</h1></header>
            </body>
            <i class="fas fa-band-aid"></i>
            <main class="container">
                <section class="row justify-content-around">
                `;
    
        for (let i = 0; i < workersInfo.length; i++) {
            let specialInfo;
            switch (workersInfo[i].job) {
                case "Manager":
                    specialInfo = `Office Number: ${workersInfo[i].officeNumber}`;
                    break;
                case "Engineer":
                    specialInfo = `Github: <a href="https://www.github.com/${workersInfo[i].Github}">${workersInfo[i].Github}</a>`;
                    break;
                case "Intern":
                    specialInfo = `School: ${workersInfo[i].school}`;
                    break;
                };
            htmlContent += `
            <div class="col-12 col-sm-6 col-lg-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <h5 class="card-title">${workersInfo[i].name}</h5>
                        <p class="card-text">${workersInfo[i].job}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${workersInfo[i].workerID}</li>
                        <li class="list-group-item">Email: <a href="mailto:${workersInfo[i].email}">${workersInfo[i].email}</a></li>
                        <li class="list-group-item">${specialInfo}</li>
                    </ul>
                </div>
            </div>
            `;
        };
        htmlContent += `
                </section>
        
            </main>
        </html>`;

        fs.writeFileSync(path.join(__dirname, "..", "dist", "index.html"), htmlContent);
    }
}

module.exports = Menu;