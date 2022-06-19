class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  exibirSaldo() {
    console.log(this.saldo);
  }
}

const renan = new Cliente("Renan", "renan@gmail.com", 123456, 500);
renan.exibirSaldo();
