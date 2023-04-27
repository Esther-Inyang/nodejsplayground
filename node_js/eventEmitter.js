const eventEmitter = require("events")

const newEmitter = new eventEmitter();

newEmitter.on("save", () =>{
    console.log("new event logged")
})

newEmitter.on("save", (name, id) =>{
    console.log(`The user name is ${name} and id is ${id}`)
})

newEmitter.emit("save", "john", 095);

// include the event module
// create a new instance of the event object
// subscribe to the event
// emit the event
// yo can add arguments to thr event callback 

