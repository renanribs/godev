let input = require("fs").readFileSync("file", "utf-8");
let lines = input.split("\n");

let golsInter = 0;
let golsGremio = 0;
let totalJogos = 0;
let vitoriaGremio = 0;
let vitoriaInter = 0;
let empates = 0;
let cont = 1;

while (cont == 1) {
  totalJogos++;
  for (let i = 0; i < lines.length; i = i + 2) {
    [golsInter, golsGremio] = lines[i].split(" ");
    cont = lines[1 + i];

    if (golsInter)
      if (cont == 2) {
        break;
      }
  }
}
