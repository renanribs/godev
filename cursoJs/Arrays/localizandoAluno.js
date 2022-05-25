//Procurando na LIsta
const alunos = ["João", "Juliana", "Caio", "Ana"];

const mediaAlunos = [10, 7, 9, 6];

let listaNotas = [alunos, mediaAlunos];

let exibeNomeNota = (nomeAluno) => {
  if (listaNotas[0].includes(nomeAluno)) {
    let indice = listaNotas[0].indexOf(nomeAluno);
    return listaNotas[0][indice] + ", sua nota é " + listaNotas[1][indice];
  } else {
    return "Nome não está na lista.";
  }
};

console.log(exibeNomeNota("Caio"));
