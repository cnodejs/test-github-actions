const cp = require("child_process");
const path = require("path");
console.log(process)

process.env["PATH"] = `/home${path.delimiter}${process.env["PATH"]}`

console.log("------------ env --------")
console.log(process.env)

console.log(cp.execSync("node -v").toString("utf8"))
