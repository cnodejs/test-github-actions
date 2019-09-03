const cp = require("child_process");
console.log(process)

process.env["PATH"] = `maple=1:${process.env["PATH"]}`

console.log("------------ env --------")
console.log(process.env)

console.log(cp.execSync("node -v").toString("utf8"))
