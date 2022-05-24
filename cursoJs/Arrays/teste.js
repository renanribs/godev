let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let numeroFuncionario = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorHoraTrabalhada = parseFloat(lines.shift());

let salario = horasTrabalhadas * valorHoraTrabalhada;

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario}`);
