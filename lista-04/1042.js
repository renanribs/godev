let input = require("fs").readFileSync("file.txt", "utf8");
let numeros = input.split(" ");

let a = parseInt(numeros.shift());
let b = parseInt(numeros.shift());
let c = parseInt(numeros.shift());

let maior = Math.max(a, b, c);
let menor = Math.min(a, b, c);
let meio = 0;

if ((a > menor) & (a < maior)) {
  meio = a;
} else if ((b > menor) & (b < maior)) {
  meio = b;
} else {
  meio = c;
}

console.log(`${menor}`);
console.log(`${meio}`);
console.log(`${maior}`);
console.log();
console.log(a);
console.log(b);
console.log(c);
