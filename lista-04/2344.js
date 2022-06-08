let input = require("fs").readFileSync("file.txt", "utf8");
let a = input.split();

let valor = parseInt(a);
if (valor === 0) {
  console.log("E");
} else if (valor >= 1 && valor < 36) {
  console.log("D");
} else if (valor >= 36 && valor < 61) {
  console.log("C");
} else if (valor >= 61 && valor < 86) {
  console.log("B");
} else {
  console.log("A");
}
