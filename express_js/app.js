const express = require("express")
const path = require("path")

const app  = express();

app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./advice-generator-app/index.html'))
})

app.get("*",(req,res)=>{
    res.status(404).send("resource not found")
})

app.listen(8080, ()  => {
    console.log("Server is listening at port 8080....")
})