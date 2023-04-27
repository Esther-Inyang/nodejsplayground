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
    let data = "INSERT INTO customers (name, address) VALUES ('Sophia', '32 Banana Island, Lagos.')"
    dbConnection.query(data, (err,result)=>{
        if (err) throw err;
        console.log("New Contents INSERTED!")
    })
})