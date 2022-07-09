let input = require("fs").readFileSync("file", "utf-8");
let lines = input.split("\n");

let tipo = 0;

let alcool = 0;
let diesel = 0;
let gasolina = 0;

while (tipo != 4) {
  tipo = parseInt(lines.shift());
  while (tipo < 1 || tipo > 4) {
    tipo = parseInt(lines.shift());
  }
  if (tipo == 1) {
    alcool++;
  } else if (tipo == 2) {
    gasolina++;
  } else if (tipo == 3) {
    diesel++;
  }
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
