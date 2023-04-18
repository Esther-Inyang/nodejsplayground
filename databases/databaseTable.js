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
    let sqlTable = "CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    dbConnection.query(sqlTable,(err, result)=>{
        if (err) throw err;
        console.log("database Table Created Successfully!")
    })
})

