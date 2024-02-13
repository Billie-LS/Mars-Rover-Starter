/*
Message Class Description
class builds object with two properties: constructor(name, commands)
 - name is a string that is the name of the message. 
 - commands is an array of Command objects.
*/
class Message {
  constructor(name, commands) {
    this.name = name;
    if (!name) {
      throw Error("Message name required.");
    }
    this.commands = commands;
  }
  // Write code here!
}

module.exports = Message;

// class Command {
//    constructor(commandType, value) {
//      this.commandType = commandType;
//      if (!commandType) {
//        throw Error("Command type required.");
//      }
//      this.value = value;
//    }
//  }
