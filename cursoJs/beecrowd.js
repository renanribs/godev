let input = require("fs").readFileSync("stdin/file.txt", "utf8");
let valor = input.split("\n");

let total = 0;
for (let index = 0; index < valor.length; index++) {
  if (valor[index] > 0) {
    total++;
  }
}
console.log(`${total} valores positivos`);
