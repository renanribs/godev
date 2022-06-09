let input = require("fs").readFileSync("file.txt", "utf8");
let valor = input.split(" ");

let A = parseFloat(valor.shift());
let B = parseFloat(valor.shift());
let C = parseFloat(valor.shift());

if (A === 0 || B * B - 4 * A * C < 0) {
  console.log("Impossivel calcular");
} else {
  let delta = Math.sqrt(B * B - 4 * A * C);

  let R1 = (-B + delta) / (2 * A);
  let R2 = (-B - delta) / (2 * A);
  console.log(`R1 = ${R1.toFixed(5)}`);
  console.log(`R2 = ${R2.toFixed(5)}`);
}
