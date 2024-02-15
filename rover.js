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
  constructor(position, mode = "NORMAL", generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  }
  receiveMessage(message) {
    let response = {
      message: message.name,
      results: [],
    };
    for (let command of message.commands) {
      response.results.push({});
    }
    return response;
  }
}

module.exports = Rover;

/*
 “constructor sets position and default values for 
 mode and generatorWatts”.
 */
