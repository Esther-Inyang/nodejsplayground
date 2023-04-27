var mysql = require("mysql");

var dbConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"firstdb"
})

dbConnection.connect((err)=>{
    if (err) throw err;
    console.log("db connect successful!")
    let addContent = "INSERT INTO products (product, onsale) VALUES ?";
    let allData = [["Yam", "yes"],["Rice","No"],["Avocado","yes"],["Tomato","no"],["Eggs","yes"]]
    dbConnection.query(addContent, [allData], (err, result)=>{
        if (err) throw err;
        console.log("database Table Created Successfully!")
    })
})

