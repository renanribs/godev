let input = require("fs").readFileSync("file", "utf-8");
var lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
  let A = Math.min(lines[i]);
  console.log(A);
}
