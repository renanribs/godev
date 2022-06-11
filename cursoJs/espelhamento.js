let cliente = [
  {
    nome: "Renan",
    sobrenome: "Ribeiro",
    idade: 27,
    email: "renan@gmail.com",
    dependentes: [
      {
        nome: "Vanessa",
        parentesco: "Noiva",
        dataNasc: "30/04/1994",
      },
      {
        nome: "Maria Aparecida",
        parentesco: "Mae",
        dataNasc: "10/05/1963",
      },
    ],
  },
  {
    nome: "Renan2",
    sobrenome: "Ribeiro",
    idade: 27,
    email: "renan@gmail.com",
    dependentes: [
      {
        nome: "Vanessa2",
        parentesco: "Noiva",
        dataNasc: "30/04/1994",
      },
      {
        nome: "Maria Aparecida2",
        parentesco: "Mae",
        dataNasc: "10/05/1963",
      },
    ],
  },
];

const listaDependentes = [...cliente[0].dependentes];
console.table(listaDependentes);

for (let nome in cliente) {
  console.log(nome);
}
