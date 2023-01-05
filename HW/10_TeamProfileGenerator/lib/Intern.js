const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
        this.job = "Intern";
    }

    getSchool() {
        console.log(`The intern ${this.name} is graduated from school: ${this.school}.`);
    }

    getRole() {
        console.log(`Intern`);
    }
}
module.exports = Intern;