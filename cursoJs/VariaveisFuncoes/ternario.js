const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("Possui 18 anos ou mais");
} else {
  console.log("Não possui 18 anos.");
}

console.log(
  //  Condição                   //true                         //false
  idadeCliente >= idadeMinima ? "Possui 18 anos ou mais" : "Não possui 18 anos"
);
