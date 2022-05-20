// tipo number

const meuNumero = 3;
const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log("O valor é: " + operacaoMatematica);

const numeroPontoFlutuante = 3.3;
const pontoFlutuante = 0.5; // é a mesma coisa que 0.5

const operacaoMatematicaPontoFlutuante = numeroPontoFlutuante + pontoFlutuante;

console.log(
  "o Valor do ponto flutuante é: " + operacaoMatematicaPontoFlutuante
);

function somarDoisValores(a, b) {
  const soma = a + b;
  return soma;
}

const soma = somarDoisValores(10, 5);
console.log(soma);
