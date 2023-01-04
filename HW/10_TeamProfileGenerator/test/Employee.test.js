const Employee = require('../lib/Employee');

describe("Employee", () => {
    // Test for default operation (input value, save them as objects)
    describe("Initialization", () => {
        it("should create an object with: Name, ID, Email if provided valid arguments", () => {
            const employee = new Employee("Heng Yu", 2, "heng.yu161@gmail.com");

            // Verify that the object has correct properties.
            expect(employee.name).toEqual("Heng Yu");
            expect(employee.id).toEqual(2);
            expect(employee.email).toEqual("heng.yu161@gmail.com");
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("Heng Yu", "2", "heng.yu161@gmail.com");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
        });
    
        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Employee("Heng Yu", -1, "heng.yu161@gmail.com");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
        });

        it("should print the employee's name", () => {
          const employee = new Employee("Heng Yu", 2, "heng.yu161@gmail.com");
          const mock = jest.spyOn(console, "log");
          mock.mockImplementation(() => {});

          employee.getName();

          expect(mock).toBeCalledWith(`Aimed member's name: Heng Yu`);
        });

        it("should print the employee's Email", () => {
          const employee = new Employee("Heng Yu", 2, "heng.yu161@gmail.com");
          const mock = jest.spyOn(console, "log");
          mock.mockImplementation(() => {});

          employee.getEmail();

          expect(mock).toBeCalledWith(`Aimed member's email address: heng.yu161@gmail.com`);
        });

        it("should print the employee's ID", () => {
          const employee = new Employee("Heng Yu", 2, "heng.yu161@gmail.com");
          const mock = jest.spyOn(console, "log");
          mock.mockImplementation(() => {});

          employee.getId();

          expect(mock).toBeCalledWith(`Aimed member's working ID: 2`);
          mock.mockRestore();
        });

        it("should print the employee's all information", () => {
          const employee = new Employee("Heng Yu", 2, "heng.yu161@gmail.com");
          const mock = jest.spyOn(console, "log");
          mock.mockImplementation(() => {});

          employee.getEmployeeRole();

          expect(mock).toBeCalledWith(`\nAimed employee:\nName: Heng Yu. \nEmail Address: heng.yu161@gmail.com \nID: 2\n`);
          mock.mockRestore();
        });
    })
})