const mysql = require("mysql")

const newDbCon = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345"
})

newDbCon.connect((err)=>{
    if (err) throw err;
    console.log("database no error!")
    newDbCon.query("CREATE DATABASE newDatabase",(err,res)=>{
        if (err) throw err;
        console.log("New Database successfully created!")
    })
})