const express = require("express");
const app = express();

const {products} = require("./data.js")

app.get("/", (req,res)=>{
//    res.json([{name:"Hilama"},{name:"Bella"}]);
   res.json(products)
})

app.listen(8080, () =>{
    console.log("server is listening on port 8080")
})


