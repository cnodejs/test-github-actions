const cp = require("child_process");
const path = require("path");
// const core = require("@actions/core")

// core.addPath("/home")

console.log("##[add-path]/homemaple")

setTimeout(() => {}, 2000)

console.log("------------ env --------")
console.log(process.env)

console.log(cp.execSync("node -v").toString("utf8"))
