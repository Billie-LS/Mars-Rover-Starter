/*
Message Class Description
Message class builds object with two properties:
constructor(name, commands)
name is a string that is the name of the message.
commands is an array of Command objects.
*/

// class named Command
class Message {
  // constructor with two properties, name and commands, commands default to empty array
  constructor(name, commands = []) {
    // logic check for name is input or throw an error
    if (!name) throw Error("Message name required.");

    // constructor set name property to name argument provided
    this.name = name;

    // constructor set commands property to commands argument provided
    this.commands = commands;
  }
}

// export Message class as Message module
module.exports = Message;
