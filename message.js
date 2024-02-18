/*
Message Class Description
class builds object with two properties: constructor(name, commands)
 - name is a string that is the name of the message. 
 - commands is an array of Command objects.
*/
class Message {
  constructor(name, commands) {
    if (!name) throw Error("Message name required.");
    this.name = name;
    this.commands = commands;
  }
}

// class Message {
//   constructor(name, commands) {
//     this.name = name;
//     if (!name) {
//       throw Error("Message name required.");
//     }
//     this.commands = commands;
//   }
// }

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
