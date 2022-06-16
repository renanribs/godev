let input = require("fs").readFileSync("file.txt", "utf8");
var entrada = input.split(" ");

let horaInicial = parseInt(entrada.shift());
let minutoInicial = parseInt(entrada.shift());
let horaFinal = parseInt(entrada.shift());
let minutoFinal = parseInt(entrada.shift());

minutoInicial += horaInicial * 60;
minutoFinal += horaFinal * 60;

let tempo = minutoFinal - minutoInicial;

if (tempo <= 0) {
  tempo += 24 * 60;
}
let hora = parseInt(tempo / 60);
let minuto = tempo % 60;
console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
