let input = require("fs").readFileSync("file.txt", "utf8");
let numeros = input.split(" ");

let A = parseFloat(numeros.shift());
let B = parseFloat(numeros.shift());
let C = parseFloat(numeros.shift());
let temp = 0;

if (A < B) {
  temp = A;
  A = B;
  B = temp;
}

if (B < C) {
  temp = B;
  B = C;
  C = temp;
}

if (A < B) {
  temp = A;
  A = B;
  B = temp;
}

if (A >= B + C) {
  console.log("NAO FORMA TRIANGULO");
} else if (A * A == B * B + C * C) {
  console.log("TRIANGULO RETANGULO");
} else if (A * A > B * B + C * C) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (A * A < B * B + C * C) {
  console.log("TRIANGULO ACUTANGULO");
}
if ((A == B) & (A == C)) {
  console.log("TRIANGULO EQUILATERO");
} else if ((A == B) & (A != C) || (A == C && A != B) || (B == C) & (B != A)) {
  console.log("TRIANGULO ISOSCELES");
}
