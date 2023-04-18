var mysql = require("mysql");

var dbConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"newDatabase"
})

dbConnection.connect((err)=>{
    if (err) throw err;
    console.log("db connect successful!")
    let sqlTable = "ALTER TABLE customers DROP COLUMN id";
    dbConnection.query(sqlTable,(err, result)=>{
        if (err) throw err;
        console.log("database Altered Successfully!")
    })
})