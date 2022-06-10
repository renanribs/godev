input = require("fs").readFileSync("file.txt", "utf8");
let valor = parseInt(input);

for (let i = 1; i <= valor; i++) {
  if (i % 2 === 0) {
    let quadrado = i * i;
    console.log(`${i}^2 = ${quadrado}`);
  }
}
