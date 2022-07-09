let input = require("fs").readFileSync("file", "utf-8");
let line = input.split("\n");

let x = parseInt(line.shift());
let y = parseInt(line.shift());
let soma = 0;

if (x > y) {
  for (let i = y; i <= x; i++) {
    if (i % 13 != 0) {
      soma += 1;
    }
  }
} else {
  for (let i = x; i <= y; i++) {
    if (i % 13 != 0) {
      soma += 1;
    }
  }
}
console.log(soma);
