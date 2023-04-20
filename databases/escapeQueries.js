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
    var adr = "11 Ontario mora way";
    var nm = "Larry Grey";
    // var data = "SELECT * FROM customers WHERE address = ?";
    var data = "SELECT * FROM customers WHERE address = ? OR name = ?"
    dbConnection.query(data, [adr, nm], (err,result)=>{
        if (err) throw err;
        console.log(result)
    })
})