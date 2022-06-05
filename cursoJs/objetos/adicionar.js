const cliente = {
  nome: "Renan",
  idade: 26,
  cpf: "123.456.789-00",
  email: "renan@email.com",
  fone: ["6298326", "6298326124"],
};

cliente.fone[2] = "123456";

cliente.fone.forEach((fone) => console.log(fone));
