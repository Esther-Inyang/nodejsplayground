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
    let updateRow = "UPDATE customers SET name = 'Josia Morris' WHERE name ='Sophia'"
    dbConnection.query(updateRow, (err, result)=>{
        if (err) throw err;
        console.log(result.affectedRows + "rows updated!")
    })
})