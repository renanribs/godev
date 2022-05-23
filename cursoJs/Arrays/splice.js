//Altera a lista
//Caso só deseje inserir dados pode passar o segundo indice como 0
//Primeiro parametro mostra onde começa e o segundo a quantidade de itens a serem removidos, terceiro quais devem ser inseridos

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

nomes.splice(2, 2, "Rodrigo");

console.log(`Lista de chamadas: ${nomes}`);
