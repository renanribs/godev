let input = require("fs").readFileSync("file.txt", "utf8");
let animal = input.split("\n");
let [n1, n2, n3] = animal[0].split("\n");

let teste = n1.localeCompare("vertebrado");
console.log(n1);
console.log(typeof n1);
console.log(teste);
