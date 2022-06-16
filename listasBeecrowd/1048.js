let input = require("fs").readFileSync("file.txt", "utf8");
var entrada = input.split("\n");

let salario = parseFloat(entrada.shift());
let novoSalario = 0;
let porcentagem = 0;
function reajuste(salario, novoSalario) {
  return novoSalario - salario;
}

if ((salario > 0) & (salario <= 400)) {
  novoSalario = (15 / 100) * salario + salario;
  porcentagem = 15;
} else if ((salario > 400) & (salario <= 800)) {
  novoSalario = (12 / 100) * salario + salario;
  porcentagem = 12;
} else if ((salario > 800) & (salario <= 1200)) {
  novoSalario = (10 / 100) * salario + salario;
  porcentagem = 10;
} else if ((salario > 1200) & (salario <= 2000)) {
  novoSalario = (7 / 100) * salario + salario;
  porcentagem = 7;
} else if (salario > 2000) {
  novoSalario = (4 / 100) * salario + salario;
  porcentagem = 4;
}

let reajuste2 = reajuste(salario, novoSalario);
console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste2.toFixed(2)}`);
console.log(`Em percentual: ${porcentagem} %`);
