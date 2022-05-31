const listaCPFs = ["123.456.789-00", "987.654.321-99", "987.654.321-00"];

const cliente = {
  nome: "Renan",
  idade: 26,
  cpf: "123.456.789-00",
  email: "renan@email.com",
  hobbies: ["assistir tv", "ler"],
};

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`);
console.log(cliente.cpf.substring(0, 3));

const todos = [
  {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Estudar front",
    isCompleted: false,
  },
];
console.log(todos[2].description, todos[2].id);
