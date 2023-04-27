const http = require("http")

const server = http.createServer((req,res)=>{
    res.write("Welcome to Localhost server 5000");
    res.end()
})

server.listen(8080)