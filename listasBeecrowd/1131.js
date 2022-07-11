let input = require("fs").readFileSync("file", "utf-8");
let lines = input.split("\n");

let golsInter,
  golsGremio,
  totalJogos,
  vitoriaGremio,
  vitoriaInter,
  empates = 0;

let cont = 1;

for (let i = 0; i < lines.length; i = i + 2) {
  totalJogos++;
  [golsInter, golsGremio] = lines[i].split(" ");

  golsGremio = parseInt(golsGremio);
  golsInter = parseInt(golsInter);

  if (golsInter > golsGremio) {
    vitoriaInter++;
  } else if (golsGremio > golsInter) {
    vitoriaGremio++;
  } else if (golsGremio == golsInter) {
    empates++;
  }
  console.log("Novo grenal (1-sim 2-nao)");
  cont = lines[1 + i];
  while ((cont != 1) & (cont != 2)) {
    console.log("Novo grenal (1-sim 2-nao)");
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
