var mysql = require("mysql")

//create connection
var conctn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345"
})

conctn.connect(function(err){
    if(err) throw err;
    console.log("connected!");
    conctn.query("CREATE DATABASE mydb", function(err, result){
        if (err) throw err;
        console.log("result:", + result)
    })
});

