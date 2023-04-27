const express = require("express")

const app = express();   //invoking the express module

app.get("/", (req, res) =>{
    res.status(200).send("Home Page")
    console.log("resource successful")
})

app.get("/about", (req, res) =>{
    res.status(200).send("About Page")
})

app.all("*", (req, res) =>{
    res.status(404).send("<h1>Resource Not Found</h1>")
})

app.listen(8080, () =>{
    console.log("server is listening at port 8080")
})



// Express methods
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen