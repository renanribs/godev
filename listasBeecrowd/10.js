let input = require("fs").readFileSync("file", "utf8");
let lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
  const numero = lines[i];

  if (numero == 2002) {
    console.log("Acesso Permitido");
    break;
  } else {
    console.log("Senha Invalida");
  }
}
