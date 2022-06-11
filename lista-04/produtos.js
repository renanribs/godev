// // let input = require("fs").readFileSync("produtos", "utf8");
// var obj = require("fs").readFileSync("produtos.json", "utf8");

// var data = [ {}];

// var maped = data.map(function (item) {
//   return {
//     Descricao: item.Descricao,
//     Embalagem: item.Embalagem,
//     Quantidade: item.Quantidade,
//   };
// });
// console.log(maped);

let cliente = {
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
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    this.saldo -= valor;
  },
};

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(obj);

  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta ${obj.nome}`);
  }
}

console.log(Object.entries(cliente));

oferecerSeguro(cliente);
