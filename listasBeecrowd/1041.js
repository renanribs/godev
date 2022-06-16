let input = require("fs").readFileSync("file.txt", "utf8");

let coordenada = input.split(" ");

let x = parseFloat(coordenada.shift());
let y = parseFloat(coordenada.shift());

if (x + y === 0) {
  console.log("Origem");
} else if (x === 0) {
  console.log("Eixo Y");
} else if (y == 0) {
  console.log("Eixo X");
} else if ((x > 0) & (y > 0)) {
  console.log("Q1");
} else if ((x < 0) & (y > 0)) {
  console.log("Q2");
} else if ((x < 0) & (y < 0)) {
  console.log("Q3");
} else if ((x > 0) & (y < 0)) {
  console.log("Q4");
}
