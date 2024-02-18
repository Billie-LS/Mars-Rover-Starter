const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
describe("Command class", function () {
  // Test 1
  it("throws error if command type is NOT passed into constructor as the first parameter", () => {
    expect(() => new Command()).toThrow(new Error("Command type required."));
  });

  // // Test 1
  // it("throws error if command type is NOT passed into constructor as the first parameter", () => {
  //   expect(() => {
  //     new Command();
  //   }).toThrow(new Error("Command type required."));
  // });

  // Test 2
  it("constructor sets command type", () => {
    let testType = "Move";
    let command = new Command(testType);
    expect(command.commandType).toBe(testType);
  });

  // // Test 2
  // it("constructor sets command type", () => {
  //   let command = new Command("Move");
  //   expect(command.commandType).toBe("Move");
  // });

  // it("constructor sets command type", function() {
  //   expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  // });

  // Test 3
  it("constructor sets a value passed in as the 2nd argument", () => {
    let testType = "Move";
    let testValue = 12000;
    let command = new Command(testType, testValue);
    expect(command.value).toEqual(testValue);
  });

  // // Test 3
  // it("constructor sets a value passed in as the 2nd argument", () => {
  //   let command = new Command("Move", 12000);
  //   expect(command.value).toEqual(12000);
  // });
});
