let input = require("fs").readFileSync("file.txt", "utf8");
let valor = input.split(" ");

let A = parseFloat(valor.shift());
let B = parseFloat(valor.shift());
let C = parseFloat(valor.shift());

function calculaPerimetro(A, B, C) {
  return A + B + C;
}
function calculaArea(A, B, C) {
  return ((A + B) * C) / 2;
}

if ((A + B > C) & (B + C > A) & (C + A > B)) {
  console.log(`Perimetro = ${calculaPerimetro(A, B, C).toFixed(1)}`);
} else {
  console.log(`Area = ${calculaArea(A, B, C).toFixed(1)}`);
}
