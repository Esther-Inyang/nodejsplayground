const { createReadStream } = require("fs");

const stream = createReadStream("../text-content/bigtext.txt", {highWaterMark: 3000, encoding: "utf8"});

stream.on("data", (result)=>{
    console.log(result)
})

stream.on("error", (err)=>{
    console.log(err)
})