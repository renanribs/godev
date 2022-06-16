let input = require("fs").readFileSync("file.txt", "utf8");
let a = input.split();

let valor = parseInt(a);
let fatorial = 1;
for (let i = 1; i <= valor; i++) {
  fatorial *= i;
}
console.log(fatorial);
