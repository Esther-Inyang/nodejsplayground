const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) =>{
    // const text = fs.readFileSync("./text-content/bigtext.txt", "utf8")
    // res.end(text)

    // using stream
    const stream = fs.createReadStream("./text-content/bigtext.txt", "utf8")
    stream.on("open",()=>{
        stream.pipe(res)  //note: pipe converts from read stream to write stream in chunks
    })

    stream.on("error", (err)=>{
        console.log(err)
        res.end(err)
    })
})

server.listen(5000)