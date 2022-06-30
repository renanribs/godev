import pegaArquivo from "./index.js";
import validaURLs from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if (caminho[3] === "validar") {
    console.log("links validados", validaURLs(resultado));
  } else {
    console.log("lista de links", resultado);
  }
}

processaTexto(caminho);
