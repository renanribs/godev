let input = require("fs").readFileSync("file.txt", "utf8");
let notas = input.split("\n");

let [n1, n2, n3, n4] = notas[0].split(" ");

let mediaTotal = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;
console.log("Media: " + mediaTotal.toFixed(1));

if (mediaTotal >= 7) {
  console.log("Aluno aprovado.");
} else if (mediaTotal < 5) {
  console.log("Aluno reprovado.");
} else {
  let [notaExame] = notas[1].split(" ");
  let notaProvaExame = parseFloat(notaExame);
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${notaProvaExame.toFixed(1)}`);
  let mediaExame = (mediaTotal + notaProvaExame) / 2;
  if (mediaExame >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${mediaExame.toFixed(1)}`);
}
