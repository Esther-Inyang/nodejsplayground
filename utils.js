
const nameModule = require("./name-module")

const showNames = (name) =>{
    console.log(`Hello, my name is ${name}`)
}

showNames("Jordan Walke")
showNames(nameModule.name1)
showNames(nameModule.name2)

// console.log(nameModule);