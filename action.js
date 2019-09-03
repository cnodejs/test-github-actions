const cp = require("child_process");
const path = require("path");
const core = require("@actions/core")

core.addPath("/home")

setTimeout(() => {}, 2000)

console.log("------------ env --------")
console.log(process.env)

console.log(cp.execSync("node -v").toString("utf8"))
