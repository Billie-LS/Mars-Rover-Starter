// import Rover class from rover.js
const Rover = require("../rover.js");
// import Message class from message.js
const Message = require("../message.js");
// import Command class from command.js
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// describe Rover class testing
describe("Rover class", () => {
  // test 7
  // confirm constructor correctly sets position and default values for mode and generatorWatts
  it("constructor sets position and default values for mode and generatorWatts", () => {
    // generate Rover object with specified position
    let rover = new Rover(98382); // pass 98382 as the rover's position.
    // confirm position property set correctly
    expect(rover.position).toEqual(98382); // example position parameter 98382
    // confirm mode property set correctly
    expect(rover.mode).toBe("NORMAL"); // constructor default 'NORMAL'
    // confirm generatorWatts property set correctly
    expect(rover.generatorWatts).toEqual(110); // constructor default '110'
  });

  // test 8
  // confirm response from receiveMessage contains name of message
  it("response returned by receiveMessage contains the name of the message", () => {
    // generate Message object with specified name
    let message = new Message("Test message name"); // pass "Test message name" as message name.
    // generate Rover object with specified position
    let rover = new Rover(98382); // example position parameter 9838
    // call receiveMessage method on Rover object with message
    let response = rover.receiveMessage(message);
    // confirm response message property matches name of message
    expect(response.message).toBe("Test message name"); // "Test message name" as message name
  });

  // test 9
  // confirm response from receiveMessage includes two results if two commands sent in message
  it("response returned by receiveMessage includes two results if two commands are sent in the message", () => {
    // define array with two commands
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    // generate Message object with specified name and commands
    let message = new Message("Test message name", commands);
    // generate Rover object with specified position
    let rover = new Rover(98382); // pass 98382 position parameter value
    // call receiveMessage method on Rover object with message
    let response = rover.receiveMessage(message);
    // confirm response results array length is 2
    expect(response.results.length).toEqual(2);
  });

  // test 10
  // confirm rover responds correctly to status check command
  it("responds correctly to the status check command", () => {
    // generate command array with status check command
    let commands = [new Command("STATUS_CHECK")];
    // generate Message object with specified name and commands
    let message = new Message("Test message name", commands);
    // generate Rover object with specified position
    let rover = new Rover(98382); // pass 98382 position parameter value
    // call receiveMessage method on Rover object with message
    let response = rover.receiveMessage(message);

    // verify roverStatus included in result
    expect(response.results[0]).toHaveProperty("roverStatus");
    // verify roverStatus includes correct mode
    expect(response.results[0].roverStatus.mode).toBe("NORMAL");
    // verify roverStatus includes correct generatorWatts
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
    // verify roverStatus includes correct position
    expect(response.results[0].roverStatus.position).toEqual(98382);
  });

  // test 11
  // confirm rover responds correctly to mode change command
  it("responds correctly to the mode change command", () => {
    // generate mode change command
    let commands = [new Command("MODE_CHANGE", "LOW_POWER")];

    // generate Message object with specified name and mode change command
    let message = new Message("Test mode change command", commands);

    // generate Rover object with specified position
    let rover = new Rover(98382); // pass 98382 position parameter value

    // generate response calling receiveMessage method on Rover object with message
    let response = rover.receiveMessage(message);

    // confirm mode change command completed successfully
    expect(response.results[0].completed).toBe(true);

    // confirm rover's mode is changed to new mode in the command
    expect(rover.mode).toBe("LOW_POWER");
  });

  // test 12
  // confirm rover responds false completed value when attempting to move in LOW_POWER mode
  it("responds with a false completed value when attempting to move in LOW_POWER mode", () => {
    // generate command with commandType 'MOVE' and value 'LOW_POWER'
    let commands = [new Command("MOVE", "LOW_POWER")];

    // generate Message object with specified name and move command
    let message = new Message("Test message name", commands);

    // generate Rover object with specified position
    let rover = new Rover(98382); // pass 98382 position parameter value

    // change rover's mode to 'LOW_POWER'
    rover.receiveMessage(
      new Message("Change mode to low power", [
        new Command("MODE_CHANGE", "LOW_POWER"),
      ])
    );

    // generate response calling receiveMessage method on Rover object with message
    let response = rover.receiveMessage(message);

    // confirm move command NOT completed successfully
    expect(response.results[0].completed).toBe(false);

    // confirm rover's position is unchanged
    expect(rover.position).toEqual(98382);
  });

  // test 13
  // confirm rover responds with the position for move command
  it("responds with the position for the move command", () => {
    // generate command with commandType 'MOVE' and new position value 12345
    let commands = [new Command("MOVE", 12345)];

    // generate Message object with specified name and move command
    let message = new Message("Test move command", commands);

    // generate Rover object with specified position
    let rover = new Rover(98382); // pass 98382 position parameter value

    // generate response calling receiveMessage method on Rover object with message
    let response = rover.receiveMessage(message);

    // confirm move command completed successfully
    expect(response.results[0].completed).toBe(true);

    // confirm rover's position updated to new position value
    expect(rover.position).toEqual(12345);
  });
});
