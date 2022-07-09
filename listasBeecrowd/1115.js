let input = require("fs").readFileSync("file", "utf-8");
var lines = input.split("\n");

for (i = 0; i < lines.length; i++) {
  let [a, b] = lines[i].split(" ");

  if (a == 0 || b == 0) {
    break;
  } else if ((a > 0) & (b > 0)) {
    console.log("primeiro");
  } else if ((a > 0) & (b < 0)) {
    console.log("quarto");
  } else if ((a < 0) & (b < 0)) {
    console.log("terceiro");
  } else console.log("segundo");
}
