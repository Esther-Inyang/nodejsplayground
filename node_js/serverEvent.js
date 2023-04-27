const http = require("http");

// normal method
// const server = http.createServer((req,res)=>{
//     res.end("server is live!")
// })

// using event emitter
const server = http.createServer();

server.on("request",(req,res)=>{
    res.end("emitting event on server! yes")
})

server.listen(5000)

