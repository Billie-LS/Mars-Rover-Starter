/*
This class builds an object with two properties: 
constructor(commandType, value)
commandType is a string that represents the type of command:
MODE_CHANGE, MOVE, or STATUS_CHECK.
value is a value related to the type of command.
*/
// class named Command
class Command {
  // constructor with two properties, commandType and value
  constructor(commandType, value) {
    // logic check for commandType input or throw an error
    if (!commandType) throw Error("Command type required.");

    // constructor set commandType property to commandType argument provided
    this.commandType = commandType;

    // constructor set value property to value argument
    this.value = value;
  }
}

// export Command class as Command module
module.exports = Command;
