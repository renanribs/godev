let input = require("fs").readFileSync("stdin/file.txt", "utf8");
var lines = input.split(" ");

var N = parseInt(lines.shift());
var N2 = N % 365;
var N3 = N2 % 30;
var anos = parseInt(N / 365);
var meses = parseInt(N2 / 30);
var dias = parseInt(N3);

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");
