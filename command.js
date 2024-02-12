/*
commandType is a string that represents the type of command. 
note, command type will be either- 
MODE_CHANGE, 
MOVE, or 
STATUS_CHECK.
value is a value related to the type of command
*/
// class builds object with two properties: constructor(commandType, value)
class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }
}

module.exports = Command;