var mysql = require('mysql')

var dbConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345"
})

dbConnection.connect((err)=>{
    if (err) throw err;
    console.log("no error in database")
    dbConnection.query("CREATE DATABASE mydatabase", (err,result)=>{
        if (err) throw err;
        console.log("neew database created")
    })
})