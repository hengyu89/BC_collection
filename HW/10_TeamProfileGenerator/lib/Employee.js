class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        if (typeof this.id !== "number" || isNaN(this.id) || this.id <= 0) {
            throw new Error("Expected parameter 'id' to be a positive number");
        }
    }

    getName() {
        console.log(`Employee's name: ${this.name}.`);
    }

    getId() {
        console.log(`Employee's Id: ${this.id}`);
    }

    getEmail() {
        console.log(`Employee's email: ${this.email}`);
    }

    getRole() {
        console.log('Employee');
    }
}
module.exports = Employee;