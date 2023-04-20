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
    // let deleteTable = "DROP TABLE students";
    // NOTE: Use Exist to Avoid getting errors if the table does not exist
    let deleteTable = "DROP TABLE IF EXISTS students"
    dbConnection.query(deleteTable, (err, result)=>{
        if (err) throw err;
        console.log("Table Deleted.")
    })
})