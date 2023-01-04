const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.typical = school;
        this.job = 'Intern';
    }

    getSchool() {
        console.log(`The Intern's school is: ${this.typical}.`);
    }

    getRole() {
        console.log(`\nThis intern:\nName: ${this.name}. \nEmail Address: ${this.email} \nID: ${this.id}\nschool: ${this.typical}`);
    }
}

module.exports = Intern;