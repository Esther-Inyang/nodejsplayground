// Note: to use the Es6 Module, add "type" : "module" to package.json 

// import { sep, join, basename, resolve, dirname } from "path";
// import {fileURLToPath} from "url"

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const path = require("path")

const absolutepath = path.resolve(__dirname,"text-content","firstpath","path-cont");
console.log(absolutepath)

const seperator = path.sep;
// console.log(seperator)

const joinpaths = path.join("/text-content","firsthpath","path-cont");
// console.log(joinpaths)

const basepath = path.basename(joinpaths);
// console.log(basepath)

