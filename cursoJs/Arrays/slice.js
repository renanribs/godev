//Divide arrays
// primeiro parametro é o indice inicial do array
// se não for passado o segundo parametro ele vai até o final do array

const nomes = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Vanessa",
  "Renan",
  "Maria",
  "Bia",
];
const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);
