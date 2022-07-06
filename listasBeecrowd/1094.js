let input = require("fs").readFileSync("file", "utf8");
let numeros = input.split("\n");

let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

let casos = parseInt(numeros.shift());
for (let index = 0; index < casos; index++) {
  let [A, B] = numeros[index].split(" ");

  A = parseInt(A);
  totalCobaias += A;
  switch (B) {
    case "R":
      totalRatos += A;
      break;
    case "C":
      totalCoelhos += A;
      break;
    case "S":
      totalSapos += A;
      break;
  }
}
let porcentagemCoelhos = parseFloat((totalCoelhos / totalCobaias) * 100);
let porcentagemRatos = parseFloat((totalRatos / totalCobaias) * 100);
let porcentagemSapos = parseFloat((totalSapos / totalCobaias) * 100);

console.log(`Total: ${totalCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);

console.log(`Percentual de coelhos: ${porcentagemCoelhos.toFixed(2)} %`);
console.log(`Percentual de ratos: ${porcentagemRatos.toFixed(2)} %`);
console.log(`Percentual de sapos: ${porcentagemSapos.toFixed(2)} %`);
