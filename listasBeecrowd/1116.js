let input = require("fs").readFileSync("file", "utf-8");
var lines = input.split("\n");

let casos = parseInt(lines.shift());

for (let i = 0; i < casos; i++) {
  let [a, b] = lines[i].split(" ");
  if (b == 0) {
    console.log("divisao impossivel");
  } else {
    let conta = (a / b).toFixed(1);
    console.log(conta);
  }
}
