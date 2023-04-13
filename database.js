var mysql = require('mysql');

var dbconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"12345"
});

dbconnection.connect(function(err){
    if(err) throw err;
    console.log("Connected server!");
    dbconnection.query("CREATE DATABASE firstdb", function(err,result){
        if(err) throw err;
        console.log("database created")
    })
});





// Creating a new Database
// const { createPool } = require('mysql');
// const pool = createPool({
//     host: "localhost",
//     user:"root",
//     password:"",
//     database: "record_company",
//     connectionLimit:10
// })

// pool.query('select * from registration', (err, result, fields)=>{
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// })



