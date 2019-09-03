const cp = require("child_process");
console.log(process)
console.log(process.env)

process.env["PATH"] = `maple=1:${process.env["PATH"]}`

console.log(cp.execSync("node -v").toString("utf8"))
