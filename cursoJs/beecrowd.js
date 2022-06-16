let input = require("fs").readFileSync("file.txt", "utf8");
var entrada = input.split("\n");

let diaInicial = entrada[0].split(" ");
let d1 = parseInt(diaInicial[1]);

let diaFinal = entrada[2].split(" ");
let d2 = parseInt(diaFinal[1]);

let [h1, m1, s1] = entrada[1].split(" : ");
let [h2, m2, s2] = entrada[3].split(" : ");
[h1, m1, s1] = [parseInt(h1), parseInt(m1), parseInt(s1)];
[h2, m2, s2] = [parseInt(h2), parseInt(m2), parseInt(s2)];

console.log(d1, h1, m1, s1);
console.log(d2, h2, m2, s2);
