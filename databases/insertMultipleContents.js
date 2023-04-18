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
    var data = "INSERT INTO customers (name, address) VALUES ?"
    // var values = [["May peterson", "74, mayel bason estate"], ["Larry Grey", "11 Ontario mora way"], ["Roda Wema", "193 Ebel Medason crescent"]]
    var newValues = [["Tressy Ela","39, Ohio Province estate"]]
    dbConnection.query(data, [newValues],(err,result)=>{
        if (err) throw err;
        console.log("New Contents INSERTED!" + result.affectedRows)
    })
})