let input = require("fs").readFileSync("file", "utf-8");
var lines = input.split("\n");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

if (A > B) {
  for (let i = B + 1; i < A; i++) {
    if (i % 5 == 2 || i % 5 == 3) {
      console.log(i);
    }
  }
} else if (A < B) {
  for (i = A + 1; i < B; i++) {
    if (i % 5 == 2 || i % 5 == 3) {
      console.log(i);
    }
  }
}
