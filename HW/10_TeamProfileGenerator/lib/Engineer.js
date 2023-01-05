const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, Github) {
        super(id, name, email);
        this.Github = Github;
        this.job = "Engineer";
    }

    getGithub() {
        console.log(`The engineer ${this.name}'s Github username: ${this.Github}.`);
    }

    getRole() {
        console.log('Engineer');
    }
}
module.exports = Engineer;