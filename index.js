// import Rover class from rover.js
const Rover = require("./rover.js");
// import Message class from message.js
const Message = require("./message.js");
// import Command class from command.js
const Command = require("./command.js");

// generate Rover object with specified position
const rover = new Rover(98382); // pass 98382 as the rover's position.

// generate Message object with specified name and array of two commands
const message = new Message("Test message name", [
  new Command("STATUS_CHECK"),
  new Command("MOVE", 100),
]);

// call receiveMessage method on Rover object with message
const response = rover.receiveMessage(message);

console.log(JSON.stringify(response, null, 2));
