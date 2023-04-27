var mysql = require("mysql");

var dbConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database: "newdatabase"
})

dbConnection.connect((err)=>{
    if (err) throw err;
    console.log("Database Connected!")
    // dbConnection.query("SELECT * FROM customers", (err,result,fields)=>{
        dbConnection.query("SELECT name, address FROM customers", (err, result, fields)=>{
        if (err) throw err;
        // console.log(result[0].address)
        // console.log(fields)
        // console.log(fields[1].name)
        console.log(fields[0].name)
    })
})