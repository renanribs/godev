let input = require("fs").readFileSync("file.txt", "utf8");
let [a] = input.split();
let valor = parseFloat(a);
let cedulas = [100.0, 50.0, 20.0, 10.0, 5.0, 2.0];
let moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

let auxiliar = 0;
console.log("NOTAS:");
for (let i = 0; i < cedulas.length; i++) {
  auxiliar = parseInt(valor / cedulas[i]);
  console.log(`${auxiliar} nota(s) de R$ ${cedulas[i].toFixed(2)}`);
  valor = valor % cedulas[i];
}
console.log("MOEDAS:");
for (let i = 0; i < moedas.length; i++) {
  auxiliar = parseInt(valor / moedas[i]);
  console.log(`${auxiliar} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
  valor = (valor % moedas[i]) + 0.00001;
}
