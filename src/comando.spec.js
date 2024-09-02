import {mostrarComando, procesarComando} from "./comando.js";

describe("Linea de comandos del auto", () => {
  it("Deberia mostrar el comando ingresado por el usuario", () => {
    const result = mostrarComando("5,5/1,2N/IAIAIAIAA")
    expect(result).toEqual("5,5/1,2N/IAIAIAIAA");
  });
  
  it("Debería procesar el comando ingresado y devolver la posicion inicial", () => {
    const result = procesarComando("5,5/1,2N/IAIAIAIAA")
    expect(result[1]).toEqual("1,2N");
  });
});