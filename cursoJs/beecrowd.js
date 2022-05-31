let input = require("fs").readFileSync("stdin/file.txt", "utf8");
let [a] = input.split();
let valor = parseFloat(a);
let cedula = [100.0, 50.0, 20.0, 10.0, 5.0, 2.0];
let moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];
let auxiliar = 0;
console.log("NOTAS:");
for (let i = 0; i < cedula.length; i++) {
  auxiliar = parseInt(valor / cedula[i]);
  console.log(`${auxiliar} nota(s) de R$ ${cedula[i].toFixed(2)}`);
  valor = valor % cedula[i];
}
console.log("MOEDAS:");
for (let j = 0; j < moedas.length; j++) {
  auxiliar = parseInt(valor / moedas[j]);
  console.log(`${auxiliar} moeda(s) de R$ ${moedas[j].toFixed(2)}`);
  valor = (valor % moedas[j]) + 0.00001;
}
