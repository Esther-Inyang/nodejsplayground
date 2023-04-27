const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("this is HOME page")
    }
    if(req.url === "/about"){
        res.end("this is ABOUT page")
    }
    res.end(`
        <h1>Opps!</h1>
        <p>Sorry, we can't seem to find that page you are looking for</p>
        <a href="/">Go back Home</a>
    `)
})

server.listen(5000)