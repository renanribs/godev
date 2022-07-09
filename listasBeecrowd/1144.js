let input = require("fs").readFileSync("file", "utf-8");
var lines = input.split("\n");

let N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
  console.log(i + " " + i * i + " " + i * i * i);
  console.log(i + " " + (i * i + 1) + " " + (i * i * i + 1));
}
