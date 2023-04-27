const http = require("http");

const upperCs = require("upper-case")

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(upperCs.upperCase("Hello World"));
    res.end();
}).listen(8080)