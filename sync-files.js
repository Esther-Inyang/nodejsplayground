const {readFile, writeFile} = require("fs");

// console.log("start")
readFile("./text-content/sync-cont","utf-8", (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const firstResult = result;

    readFile("./text-content/syncb-cont","utf-8", (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const secondResult = result;

        writeFile("./text-content/write-sync-results.text",
            `here are the results: FIRST ${firstResult} AND ${secondResult} RESULTS`,(err,result) =>{
                if(err){
                    console.log(err)
                    return
                }
                console.log("done with read and write tasks")
            }
        )
    })
})

console.log("Starting a new task")

