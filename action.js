const cp = require("child_process");
console.log(process)
console.log(process.env)

console.log(cp.execSync("node -v").toString("utf8"))
