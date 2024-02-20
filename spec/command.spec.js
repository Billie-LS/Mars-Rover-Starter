// import Command class from command.js
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
// do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// describe Command class testing
describe("Command class", function () {
  // Test 1
  // test error thrown if commandType not passed in constructor as first parameter
  it("throws error if command type is NOT passed into constructor as the first parameter", () => {
    // confirm constructing Command object without commandType throws an error
    expect(() => new Command()).toThrow(new Error("Command type required."));
  });

  // Test 2
  // confirm constructor sets commandType property correctly
  it("constructor sets command type", () => {
    // define a test commandType
    let testType = "Move";
    // generate Command object with test commandType
    let command = new Command(testType);
    // confirm commandType property set correctly
    expect(command.commandType).toBe(testType);
  });

  // Test 3
  // confirm constructor sets value passed in as the 2nd argument
  it("constructor sets a value passed in as the 2nd argument", () => {
    // define a test commandType
    let testType = "Move";
    // define a test value
    let testValue = 12000;
    // generate Command object with test commandType and test value
    let command = new Command(testType, testValue);
    // confirm value property set correctly
    expect(command.value).toEqual(testValue);
  });
});
