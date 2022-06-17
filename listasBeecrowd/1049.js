let input = require("fs").readFileSync("file", "utf8");
let animal = input.split("\n");
let A = animal.shift();
let B = animal.shift();
let C = animal.shift();

if ((A == "vertebrado") & (B == "ave") & (C == "carnivoro")) {
  console.log("aguia");
}
if ((A == "vertebrado") & (B == "ave") & (C == "onivoro")) {
  console.log("pomba");
}
if ((A == "vertebrado") & (B == "mamifero") & (C == "onivoro")) {
  console.log("homem");
}
if ((A == "vertebrado") & (B == "mamifero") & (C == "herbivoro")) {
  console.log("vaca");
}

if ((A == "invertebrado") & (B == "inseto") & (C == "hematofago")) {
  console.log("pulga");
}
if ((A == "invertebrado") & (B == "inseto") & (C == "herbivoro")) {
  console.log("lagarta");
}
if ((A == "invertebrado") & (B == "anelideo") & (C == "hematofago")) {
  console.log("sanguessuga");
}
if ((A == "invertebrado") & (B == "anelideo") & (C == "onivoro")) {
  console.log("minhoca");
}
