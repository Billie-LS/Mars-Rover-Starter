// import Message class from message.js
const Message = require("../message.js");
// import Command class from command.js
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
/*
Message Class Description
Message class builds object with two properties:
constructor(name, commands)
name is a string that is the name of the message.
commands is an array of Command objects.
*/
// describe Message class testing
describe("Message class", () => {
  // Test 4
  // test error thrown if name not passed in constructor as first parameter
  it("throws error if a name is NOT passed into the constructor as the first parameter", () => {
    // confirm constructing  Message object without name throws error
    expect(() => new Message()).toThrow(
      new Error("name required for Message object.")
    );
  });

  // Test 5
  // confirm constructor sets name property correctly
  it("constructor sets name", () => {
    // define a test name
    let testName = "Test message with two commands";
    // generate Message object with test name
    let message = new Message(testName);
    // confirm name property set correctly
    expect(message.name).toBe(testName);
  });

  // Test 6
  // confirm constructor sets commands array property correctly
  it("contains a commands array passed into the constructor as the 2nd argument", () => {
    // define array of commands
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    // generate Message object with test name and test commands
    let message = new Message("Test message with two commands", commands);
    // confirm commands array property set correctly
    expect(message.commands).toEqual(commands);
  });
});
