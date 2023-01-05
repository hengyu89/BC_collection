const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
        this.job = "Manager";
    }

    getRole() {
        console.log('Manager');
    }
}
module.exports = Manager;