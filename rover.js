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
      // switch statement to evaluate different commandType values
      switch (command.commandType) {
        case "MODE_CHANGE":
          // respond to commandType MODE_CHANGE
          this.mode = command.value; // update rover's mode to new value specified in command
          response.results.push({ completed: true }); // push completed results object
          break;

        case "MOVE":
          // ternary operator determines completed status per rover mode
          const completed = this.mode !== "LOW_POWER";
          // push results object indicating move command completed
          response.results.push({ completed: completed ? true : false });
          // update position if rover not LOW_POWER mode
          if (completed) {
            this.position = command.value;
          }
          break;

        // case "MOVE":
        //   // respond to commandType STATUS_CHECK
        //   if (this.mode === "LOW_POWER") {
        //     // logic check if rover in LOW_POWER mode
        //     // push results object indicating move command NOT completed
        //     response.results.push({ completed: false });
        //   }
        //   // logic check if rover NOT in LOW_POWER mode
        //   if (this.mode !== "LOW_POWER") {
        //     this.position = command.value;
        //     // push results object indicating move command completed
        //     response.results.push({ completed: true });
        //   }
        //   break;

        case "STATUS_CHECK":
          // respond to commandType STATUS_CHECK
          response.results.push({
            // push results object with rover status
            completed: true,
            roverStatus: {
              mode: this.mode,
              generatorWatts: this.generatorWatts,
              position: this.position,
            },
          });
          break;

        default:
          // respond to any other commandType
          response.results.push({}); // push empty results object
          break;
      }
    }

    // // iterate each command in message
    // for (let command of message.commands) {
    //   // logic check if commandType is MODE_CHANGE
    //   if (command.commandType === "MODE_CHANGE") {
    //     // respond to MODE_CHANGE command
    //     this.mode = command.value; // Update rover's mode to the new value specified in the command
    //     response.results.push({ completed: true }); // Push a completed result object

    //     // logic check if commandType is MOVE
    //   } else if (command.commandType === "MOVE") {
    //     // check if rover in LOW_POWER mode
    //     if (this.mode === "LOW_POWER") {
    //       // Push result object indicating move command not completed
    //       response.results.push({ completed: false });
    //     } else {
    //       // for other modes, perform move and push completed result object
    //       this.position = command.value;
    //       response.results.push({ completed: true });
    //     }

    //     // logic check if commandType is STATUS_CHECK
    //   } else if (command.commandType === "STATUS_CHECK") {
    //     // respond to STATUS_CHECK command
    //     response.results.push({
    //       // Push result object with rover status
    //       completed: true,
    //       roverStatus: {
    //         mode: this.mode,
    //         generatorWatts: this.generatorWatts,
    //         position: this.position,
    //       },
    //     });
    //   } else {
    //     // for other commands, push an empty result object
    //     response.results.push({});
    //   }
    // }

    // return response object with executed commands and results
    return response;
  }
}

// export Rover class as Rover module
module.exports = Rover;
