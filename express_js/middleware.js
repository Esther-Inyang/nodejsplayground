const express = require('express');
const app = express()
const logger = require("./logger")
const secondLogger = require("./logger2")
const morgan = require("morgan")

// app.use(logger);  //invokes middleware for any route
// app.use("/api",logger); //Mounts the specified middleware function or functions at the specified path
// Middleware function is executed when the base of the requested path matches

app.use(morgan('tiny'))  //third party  middleware

// app.use([logger, secondLogger]) //own middleware
// app.use(express.static('./public')) //express middleware

app.get("/", (req, res)=>{
    res.status(200).send('Home')
})

app.get("/about", (req, res)=>{
    
    res.status(200).send('About')
})

app.get("/api/users", (req, res)=>{
    // console.log(req.user) //with own logger
    res.status(200).send('Apissssss')
})


app.get("*", (req, res)=>{
    res.status(404).send('No page found')
})

app.listen(8080, () =>{    
    console.log("Server is listening on port 8080")
})
