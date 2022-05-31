const cliente = {
  nome: "Renan",
  idade: 26,
  cpf: "123.456.789-00",
  email: "renan@email.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

chaves.forEach((info) => console.log(cliente[info]));
console.log(cliente["nome"]);
