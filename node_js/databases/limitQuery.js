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
    // let limitRows = "SELECT * FROM customers LIMIT 2"
    // Note: Use OFFSET keyword to start from a specified row. e.g OFFSET 3 starts the count from row 4th row
    // let limitRows = "SELECT * FROM customers LIMIT 2 OFFSET 3" or this
    let limitRows = "SELECT * FROM customers LIMIT 2, 3" //note: the numbers work in reverse, which is now row 2 limit 3
    dbConnection.query(limitRows, (err, result)=>{
        if (err) throw err;
        console.log(result)
    })
})