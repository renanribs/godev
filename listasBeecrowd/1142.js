let input = require("fs").readFileSync("file", "utf-8");
var lines = input.split("\n");
let array = [];
let N = parseInt(lines.shift());
let soma = 1;
for (let i = 1; i <= N; i++) {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    // console.log(soma + " ");

    arr.push(soma);

    soma++;
    array = arr;
  }
  console.log(`${arr.join(` `)} PUM`);

  soma++;
}
