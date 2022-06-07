const soma = require("./calculadora");

describe("calculadora", () => {
  test("somar dois números", () => {
    expect(soma(1, 1)).toEqual(2);
  });

  test("somar dois número maiores que 10", () => {
    expect(soma(10, 20)).toEqual(30);
  });
});
