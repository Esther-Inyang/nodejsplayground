const http = require("http")
const fs = require("fs");

http.createServer((req, res)=>{
    fs.readFile("index.html", (err, data)=>{
        if(err) throw err;
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write(data);
        return res.end();
    })
}).listen(8080);

fs.appendFile("teext.txt","hi what is up here",function(err){
    if(err) throw err;
    console.log("file appended")
});

fs.open("teext2.txt","w",function(err,file){
    if(err) throw err;
    console.log("file opened")
})

fs.writeFile("teext.txt","hey! You were replaced with this", (err)=>{
    if(err) throw err;
    console.log("file replaced")
})


// fs.unlink("delete-file.txt",(err)=>{
//     if(err) throw err;
//     console.log("file deleted");
// })

// fs.rename("teext.txt","text.txt",(err)=>{
//     if(err) throw err;
//     console.log("file renamed")
// })


