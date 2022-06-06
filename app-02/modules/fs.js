const fs = require("fs");
const path = require("path");

// //criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Error: ", error);
  }

  console.log("Pasta criada com Sucesso!");
});

// Criar arquivo

// fs.writeFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "Hello node!",
//   (error) => {
//     if (error) {
//       return console.log("Erro: ", error);
//     }
//     console.log("Arquivo criado com sucesso!");
//   }
// );

//Adicionar a um arquivo

fs.appendFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello World",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo modificado com sucesso!");
  }
);
