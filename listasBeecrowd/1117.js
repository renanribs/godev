let input = require("fs").readFileSync("file", "utf8");
let list = input.split("\n");
let cont = 0;
let nota = 0;

for (let i = 0; i < list.length; i++) {
  if ((list[i] >= 0) & (list[i] <= 10)) {
    nota = nota + parseFloat(list[i]);
    cont += 1;
    if (cont == 2) {
      console.log(`media = ${(nota / 2).toFixed(2)}`);
    }
  } else {
    console.log(`nota invalida`);
  }
}
