//Procurando na LIsta
const alunos = ["João", "Juliana", "Caio", "Ana"];

const mediaAlunos = [10, 7, 9, 6];

let listaNotas = [alunos, mediaAlunos];

const exibeNomeNota = (nomeAlunos) => {
  if (listaNotas[0].includes(nomeAlunos)) {
    let indice = listaNotas[0].indexOf(nomeAlunos);
    return listaNotas[0][indice] + ", sua nota é: " + listaNotas[1][indice];
  } else {
    ("Aluno não encontrado.");
  }
};

console.log(exibeNomeNota("Caio"));
