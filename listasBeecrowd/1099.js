let input = require("fs").readFileSync("file", "utf-8");
var lines = input.split("\n");

let casos = parseInt(lines.shift());

for (i = 0; i < casos; i++) {
  let soma = 0;
  let [a, b] = lines[i].split(" ");
  a = parseInt(a);
  b = parseInt(b);
  if (b > a) {
    for (let i = a + 1; i < b; i++) {
      if (i % 2 != 0) {
        soma += i;
      }
    }
  } else {
    for (let i = b + 1; i < a; i++) {
      if (i % 2 != 0) {
        soma += i;
      }
    }
  }
  console.log(soma);
}
