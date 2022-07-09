let input = require("fs").readFileSync("file", "utf-8");
var lines = input.split("\n");

let a = 0;
let b = 0;
let array = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i][0] > lines[i][2]) {
    a = lines[i][0];
    b = lines[i][2];
  } else {
    b = lines[i][0];
    a = lines[i][2];
  }
  if (a <= 0) {
    break;
  }
  let text = "";
  for (let i = b; i <= b; i++) {
    b++;
  }
}
console.log(b);
