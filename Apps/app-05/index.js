import express from "express";
const app = express();
const port = 80;
import fSoma from "./soma.js";

app.get("/main", (req, res) => {
  let resultado = fSoma(10, 10);
  res.send(`${resultado}`);
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
