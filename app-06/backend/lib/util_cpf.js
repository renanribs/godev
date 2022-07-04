function buscarUnidadeFederativa(cpf) {
  let unidadeFederativa;
  let nonoDigito = cpf[8];
  switch (nonoDigito) {
    case "1":
      unidadeFederativa = "DF, GO, MS, MT e TO";
      break;
    case "2":
      unidadeFederativa = "AC, AM, AP, PA, RO e RR";
      break;
    case "3":
      unidadeFederativa = "CE, MA e PI";
      break;
    case "4":
      unidadeFederativa = "AL, PB, PE, RN";
      break;
    case "5":
      unidadeFederativa = "BA e SE";
      break;
    case "6":
      unidadeFederativa = "MG";
      break;
    case "7":
      unidadeFederativa = "ES e RJ";
      break;
    case "8":
      unidadeFederativa = "SP";
      break;
    case "9":
      unidadeFederativa = "PR e SC";
      break;
    case "0":
      unidadeFederativa = "RS";
      break;
  }
  return unidadeFederativa;
}
