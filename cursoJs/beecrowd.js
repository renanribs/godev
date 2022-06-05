let input = require("fs").readFileSync("stdin/file.txt", "utf8");
let valor = input.split("\n");
console.log(valor);
let [x1, y1] = valor[0].split(" ");
let [x2, y2] = valor[1].split(" ");
console.log(x1, y1);

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 2);
console.log(distancia.toFixed(4));
