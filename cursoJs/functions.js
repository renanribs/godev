// Declaração de função
function imprimeTexto(texto) {
  console.log(texto);
}

imprimeTexto("Oi!");
imprimeTexto("Olá Renan!");
imprimeTexto(soma());

function soma() {
  return 2 + 2;
}

function somaDoisNumeros(numero1, numero2) {
  return numero1 + numero2;
}

function multiplicaDoisNumeros(numero1, numero2) {
  return numero1 * numero2;
}

console.log(
  multiplicaDoisNumeros(somaDoisNumeros(10, 20), somaDoisNumeros(1, 5))
);

function cumprimentar(pessoa) {
  console.log(`oi, ${pessoa}!`);
}
cumprimentar("Renan");
