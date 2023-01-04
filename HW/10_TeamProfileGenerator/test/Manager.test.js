const Manager = require('../lib/Manager');

describe("Manager", () => {
    // Test for default operation (input value, save them as objects)
    describe("Initialization", () => {
        it("should create an object with: Name, ID, Email if provided valid arguments", () => {
            const manager = new Manager("Heng Yu", 2, "heng.yu161@gmail.com", 5);

            // Verify that the object has correct properties.
            expect(manager.name).toEqual("Heng Yu");
            expect(manager.id).toEqual(2);
            expect(manager.email).toEqual("heng.yu161@gmail.com");
            expect(manager.typical).toEqual(5);
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Manager("Heng Yu", "2", "heng.yu161@gmail.com", 5);
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
          });
      
          it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Manager("Heng Yu", -1, "heng.yu161@gmail.com", 5);
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
          });

          it("should throw an error if 'Office Number' is not a number", () => {
            const cb = () => new Manager("Heng Yu", 2, "heng.yu161@gmail.com", "aloha");
            const err = new Error("Expected parameter 'Office Number' to be a positive number");
      
            expect(cb).toThrowError(err);
          });
      
          it("should throw an error if 'Office Number' is less than 0", () => {
            const cb = () => new Manager("Heng Yu", 2, "heng.yu161@gmail.com", -1);
            const err = new Error("Expected parameter 'Office Number' to be a positive number");
      
            expect(cb).toThrowError(err);
          });

          it("should print the manager's all information", () => {
            const manager = new Manager("Heng Yu", 2, "heng.yu161@gmail.com", 5);
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => {});
  
            manager.getRole();
  
            expect(mock).toBeCalledWith(`\nThis manager:\nName: Heng Yu. \nEmail Address: heng.yu161@gmail.com \nID: 2\nOffice Number: 5`);
            mock.mockRestore();
          });
    })
})