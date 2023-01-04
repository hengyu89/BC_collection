class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        if (typeof this.id !== "number" || isNaN(this.id) || this.id <= 0) {
            throw new Error("Expected parameter 'id' to be a positive number");
          }
    }

    getName() {
        console.log(`Aimed member's name: ${this.name}`);
    }

    getEmail() {
        console.log(`Aimed member's email address: ${this.email}`);
    }

    getId() {
        console.log(`Aimed member's working ID: ${this.id}`);
    }

    getEmployeeRole() {
        console.log(`\nAimed employee:\nName: ${this.name}. \nEmail Address: ${this.email} \nID: ${this.id}\n`);
    }

}
// const test = new Employee("Aloha", "Bloha", "Cloha");
// test.getRole();
// console.log(test.name);
module.exports = Employee;