var mysql = require("mysql");

var dbConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"newdatabase"
})

dbConnection.connect((err)=>{
    if (err) throw err;
    console.log("db connect successful!")
    // let sqlTable = "ALTER TABLE customers ADD id INT FIRST";
    // let sqlTable = "ALTER TABLE customers DROP COLUMN id";
    let sqlTable = "ALTER TABLE customers MODIFY COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    dbConnection.query(sqlTable,(err, result)=>{
        if (err) throw err;
        console.log("database Altered Successfully!")
    })
})