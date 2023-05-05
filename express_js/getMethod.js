const express = require("express");
const app = express();

let { workers } = require("./dataForApi.js")

app.get("/api/workers", (req,res)=>{
   res.status(200).json({success: true, data: workers})
})

app.listen(8080, () =>{
    console.log("server is listening on port 8080")
})