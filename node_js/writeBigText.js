const { writeFileSync } = require("fs")

for(i = 0; i < 1000; i++){
    writeFileSync("./text-content/bigtext.txt", `This is a very big text ${i}\n
    `, {flag:"a"})
}