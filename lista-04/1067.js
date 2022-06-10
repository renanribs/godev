let input = require("fs").readFileSync("file.txt", "utf8");
let numero = parseInt(input);

for (let i = 1; i <= numero; i = i + 2) {
  console.log(i);
}
