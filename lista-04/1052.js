input = require("fs").readFileSync("file.txt", "utf8");
let numero = parseInt(input);

let meses = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let mes = numero - 1;

if ((numero > 0) & (numero <= 12)) {
  console.log(meses[mes]);
} else {
  console.log("Mes não existe");
}
