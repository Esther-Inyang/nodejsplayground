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
    var data = "INSERT INTO customers (name, address) VALUES ('Grace Amiville', 'Amiville College of Science')"
    dbConnection.query(data, (err,result)=>{
        if (err) throw err;
        console.log("Record ID Affected is row " + result.insertId)
    })
})