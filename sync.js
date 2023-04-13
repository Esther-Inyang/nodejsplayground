const { readFileSync, writeFileSync } = require('fs');

const firstFile = readFileSync("./text-content/sync-cont","utf-8");
const secondFile = readFileSync("./text-content/syncb-cont","utf-8");
console.log(firstFile, secondFile);

writeFileSync(
    "./text-content/writesync.txt",
    `HERE IS THE FIRST ${firstFile} and 
    SECOND ${secondFile} FILE`
)



