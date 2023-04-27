var mysql = require("mysql");

var dbConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"firstdb"
})

dbConnection.connect((err)=>{
    if (err) throw err;
    console.log("db connect successful!")
    var tableData = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, product VARCHAR(255), onsale VARCHAR(255))"
    dbConnection.query(tableData, (err, result)=>{
        if (err) throw err;
        console.log("new table record created.")
    })
})