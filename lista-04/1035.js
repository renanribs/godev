let input = require("fs").readFileSync("file.txt", "utf8");
let valor = input.split(" ");

let A = parseInt(valor.shift());
let B = parseInt(valor.shift());
let C = parseInt(valor.shift());
let D = parseInt(valor.shift());

if ((B > C) & (D > A) & (C + D > A + B) & (C > 0) & (D > 0) & (A % 2 === 0)) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
