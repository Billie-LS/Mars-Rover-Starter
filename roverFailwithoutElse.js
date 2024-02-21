/*
Rover
Rover receives a message object, 
updates its properties from the message, and 
returns the results.
class builds rover object with properties, and 
also contains function outside constructor to handle updates to properties.

constructor(position)

position is a number representing the rover’s position.
Sets this.position to position
Sets this.mode to 'NORMAL'
Sets the default value for generatorWatts to 110
receiveMessage(message)

message is a Message object
Returns an object containing at least two properties:
message: the name of the original Message object
results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.
Updates certain properties of the rover object
*/
class Rover {
  constructor(position) {
    // constructor sets position to provided argument; parse to number
    this.position = parseFloat(position); // position is number

    // constructor sets mode to fixed default "NORMAL"
    this.mode = "NORMAL"; // default mode = "NORMAL"

    // constructor sets generatorWatts to fixed default 110
    this.generatorWatts = 110; // default generatorWatts = 110
  }
  receiveMessage(message) {
    // create response object with values message.name and empty array for results
    let response = {
      message: message.name,
      results: [],
    };

    // iterate each command in message
    for (let command of message.commands) {
      // logic check if commandType is MODE_CHANGE
      if (command.commandType === "MODE_CHANGE") {
        // Respond to MODE_CHANGE command
        this.mode = command.value; // Update rover's mode to the new value specified in the command
        response.results.push({ completed: true }); // Push a completed result object
      }

      // logic test for commandType is 'MOVE'
      if (command.commandType === "MOVE") {
        // Check if the rover is in LOW_POWER mode
        if (this.mode === "LOW_POWER") {
          // Push a result object indicating the move command was not completed
          response.results.push({ completed: false });
        } else {
          // For other modes, perform the move and push a completed result object
          this.position = command.value;
          response.results.push({ completed: true });
        }
      }

      // logic test for commandType is 'STATUS_CHECK'
      if (command.commandType === "STATUS_CHECK") {
        // Respond to STATUS_CHECK command
        response.results.push({
          // Push result object with rover status
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position,
          },
        });
      }

      // For other commands, push an empty result object
      response.results.push({});
    }

    // return response object with executed commands and results
    return response;
  }
}

// export Rover class as Rover module
module.exports = Rover;
