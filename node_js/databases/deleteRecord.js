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
    var data = "DELETE FROM customers WHERE id = '6'"
    dbConnection.query(data, (err,result)=>{
        if (err) throw err;
        console.log("Number of rows deleted is " + result.affectedRows)
    })
})