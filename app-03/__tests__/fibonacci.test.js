const fibonacci = require("../src/fibonacci");

describe("Verificar a função que gera a série de Fibonacci", () => {
  test("Passou o valor 1, deve retornar 0", () => {
    expect(fibonacci(1)).toEqual(1);
  });
});
