
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
    // var data = "SELECT * FROM customers WHERE address LIKE 'O%'";
    dbConnection.query("SELECT * FROM customers WHERE name = 'Tressy Ela'", (err,result)=>{
        if (err) throw err;
        console.log(result)
    })
})


