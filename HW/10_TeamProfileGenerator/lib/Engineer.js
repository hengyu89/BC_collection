const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.typical = github;
        this.job = 'Engineer';
    }

    getGithub() {
        console.log(`The engineer's GitHub account: ${this.typical}`);
    }

    getRole() {
        console.log(`\nThis engineer:\nName: ${this.name}. \nEmail Address: ${this.email} \nID: ${this.id}\nGithub: ${this.typical}`);
    }
}
// const test = new Engineer("Aloha", 2, "Cloha", "Dloha");
// test.getRole();
// console.log(test.name);
module.exports = Engineer;