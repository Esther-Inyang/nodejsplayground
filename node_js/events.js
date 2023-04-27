// Create a success event alert!
// steps
// 1. include the events function
// 2. get the eventEmitter objeect
// 3. create the event alert function
// 4. call the event method
// 5. emit the event

var jsevents = require("events")

var eventEmitter = new jsevents.EventEmitter();

const successMsg = () =>{
    console.log("it's a success!")
}

eventEmitter.on("shout",successMsg)

eventEmitter.emit("shout")



// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');