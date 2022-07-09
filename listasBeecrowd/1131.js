let input = require("fs").readFileSync("file", "utf-8");
let lines = input.split(" ");

let golsInter = 0;
let golsGremio = 0;
let totalJogos = 0;
let vitoriaGremio = 0;
let vitoriaInter = 0;
let empates = 0;
let cont = 1;

while ((cont = 1)) {
  totalJogos++;
  golsInter = parseInt(lines.shift());
  golsGremio = parseInt(lines.shift());

  if (golsInter > golsGremio) {
    vitoriaInter++;
  } else if (golsGremio > golsInter) {
    vitoriaGremio++;
  } else {
    empates++;
  }

  console.log("Novo grenal (1-sim 2-nao)");
  cont = parseInt(lines.shift());
  while ((cont != 1) & (cont != 2)) {
    console.log("Novo grenal (1-sim 2-nao)");
    cont = parseInt(lines.shift());
  }
}

console.log(`${totalJogos} grenais`);
console.log(`Inter:${vitoriaInter}`);
console.log(`Gremio:${vitoriaGremio}`);
console.log(`Empates:${empates}`);

if (vitoriaInter > vitoriaGremio) {
  console.log("Inter venceu mais");
} else if (vitoriaGremio > vitoriaInter) {
  console.log("Gremio venceu mais");
} else {
  console.log("Nao houve vencedor");
}
