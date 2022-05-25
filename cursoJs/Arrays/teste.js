let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let primeiro = lines.shift().split(" ");

let segundo = lines.shift().split(" ");

let Peca1 = parseInt(primeiro[0]);
let quant1 = parseInt(primeiro[1]);
let valorUni1 = parseFloat(primeiro[2]);

let Peca2 = parseInt(segundo[0]);
let quant2 = parseInt(segundo[1]);
let valorUni2 = parseFloat(segundo[2]);

console.log(
  "VALOR A PAGAR: R$ " +
    parseFloat(quant1 * valorUni1 + quant2 * valorUni2).toFixed(2)
);
