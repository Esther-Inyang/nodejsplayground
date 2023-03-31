console.log("hi node")

const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/html" });
    res.end("Haaallo Word hhhehehehe!");
}).listen(8080)
