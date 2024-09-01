import mostrarComando from "./comando.js";
import Superficie from "./superficie.js";

describe("Linea de comandos del auto", () => {
  it("Deberia mostrar el comando ingresado por el usuario", () => {
    const result = mostrarComando("5,5/1,2N/IAIAIAIAA")
    expect(result).toEqual("5,5/1,2N/IAIAIAIAA");
  });
});
describe("Superficie", () => {
  it("Deberia mostrar el area de la superfice", () => {
    const result = new Superficie(3, 3)
    expect(result.mostrarSuperficie()).toEqual([3, 3]);
  });
  it("Deberia verificar si la fila es mayor 0", () => {
    const result = new Superficie(3, 3)
    expect(result.validarSuperficie()).toEqual(true);
  });
  it("Deberia verificar si la fila NO es mayor 0", () => {
    const result = new Superficie(-1, 3)
    expect(result.validarSuperficie()).toEqual(false);
  });
  it("Deberia verificar si la columna NO es mayor 0", () => {
    const result = new Superficie(3, -1)
    expect(result.validarSuperficie()).toEqual(false);
  });

});
