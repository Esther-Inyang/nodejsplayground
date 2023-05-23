const express = require("express");
const app = express();

let { workers } = require("./dataForApi.js")

// to access static assets
app.use(express.static("./public"))
// to parse data
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json());

app.get("/api/workers", (req,res)=>{
   res.status(200).json({success: true, data: workers})
})

app.post('/login', (req,res)=>{
    const {name} = req.body;

    if(!name){ 
        // ALWAYS ADD RETURN To avoid Header Errors
       return res.status(400).json({success: false, msg: "Please enter a name"})
    }
    res.status(200).json({success:true, person:name});
})

app.post('/login', (req,res)=>{
    const {name} = req.body;
    if(name){
     return  res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide a name')
})

app.listen(8080, () =>{
    console.log("server is listening on port 8080")
})