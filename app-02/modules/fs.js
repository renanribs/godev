const fs = require("fs");
const path = require("path");

//criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Error: ", erro);
  }
  console.log("Pasta criada com Sucesso!");
});
