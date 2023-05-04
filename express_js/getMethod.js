const express = require("express");
const app = express();

let { workers } = require("./dataForApi.js")

app.use(express.static("./public"))

app.get("/api/workers", (req,res)=>{
    // console.log(workers)
   res.status(200).json({success: true, data: workers})
})

app.listen(8080, () =>{
    console.log("server is listening on port 8080")
})