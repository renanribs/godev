let input = require("fs").readFileSync("stdin/file.txt", "utf8");
var valor = input.split("\n");

let total = 0;
for (i = 0; i <= 5; i++) {
  if (Number(valor[i]) % 2 === 0) {
    total++;
  }
}

console.log(`${total} valores pares`);
