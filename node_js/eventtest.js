const http = require("http")

const server = http.createServer((req, res)=>{
    console.log("event")
    res.end("hi there")
})

server.listen(5000, ()=>{
    console.log("Server is listening at Port: 5000")
})