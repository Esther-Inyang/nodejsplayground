const  {readFile, writeFile} = require("fs").promises;

// const util = require("util");
// const readFileProm = util.promisify(readFile)
// const writeFileProm = util.promisify(writeFile)

const asyncFunc = async ()=> {
    try{
        const firstTask = await readFile("./text-content/sampletext.txt", "utf8")
        const secondTask = await readFile("./text-content/sampletextB.txt", "utf8")
        await writeFile("./text-content/writetxt.txt", `${secondTask}, YOU ARE AWESOME!`, {flag: "a"})
        console.log(firstTask, secondTask)
    } catch (err) {
        console.log(err)
    }
}

asyncFunc()

// const func = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path, "utf8", (err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// func("./text-content/sampletext.txt")
// .then(result => console.log(result))
// .catch(error => console.log(error))