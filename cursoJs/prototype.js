function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}
const renan = new ClientePoupanca("Renan", 123456, "renan@gmail.com", 100, 200);
console.log(renan);

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};
renan.depositarPoup(30);
console.log(renan.saldoPoup);
