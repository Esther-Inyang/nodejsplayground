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
    var data = "SELECT * FROM customers ORDER BY name DESC"
    dbConnection.query(data, (err,result)=>{
        if (err) throw err;
        console.log(result)
    })
})