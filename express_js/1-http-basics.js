const http = require("http")
const { readFileSync } = require("fs")

const aboutContent = readFileSync("./index.html")

const server = http.createServer((req,res)=>{
const url = req.url;
    if(url === "/"){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write("<h1>Home page</h1>");
        res.end();
    }else if(url === "/about"){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        // res.write("<h1>About Page</h1>");
        res.write(aboutContent)
        res.end();
    }else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.write(`<h1>404</h1><h2>Page not found!</h2><p>return to the</p><a href="/">Home Page</a>`);
        res.end();
    }
   
})

server.listen(8080);