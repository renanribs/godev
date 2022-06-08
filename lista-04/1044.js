let input = require("fs").readFileSync("file.txt", "utf8");
let valor = input.split(" ");

let A = parseInt(valor.shift());
let B = parseInt(valor.shift());

if (A > B) {
  if (A % B === 0) {
    console.log("Sao Multiplos");
  } else {
    console.log("Nao sao Multiplos");
  }
} else {
  if (B % A === 0) {
    console.log("Sao Multiplos");
  } else {
    console.log("Nao sao Multiplos");
  }
}
