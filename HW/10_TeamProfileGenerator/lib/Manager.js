 const Employee = require('./Employee');

 class Manager extends Employee {
     constructor(name, id, email, officeNumber) {
         super(name, id, email);
         this.typical = officeNumber;
         this.job = 'Manager';
         if (typeof this.typical !== "number" || isNaN(this.typical) || this.typical <= 0) {
            throw new Error("Expected parameter 'Office Number' to be a positive number");
          }
     }

     getRole() {
         console.log(`\nThis manager:\nName: ${this.name}. \nEmail Address: ${this.email} \nID: ${this.id}\nOffice Number: ${this.typical}`);
     }
 }

 module.exports = Manager;