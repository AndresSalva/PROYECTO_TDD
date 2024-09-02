import {mostrarComando, procesarComando,desglosarDimension,desglosarPosicionInicial,desglosarMovimiento,ejecutar,validarPosicionInicial} from "./comando.js";

describe("Linea de comandos del auto", () => {
  it("Deberia mostrar el comando ingresado por el usuario", () => {
    const result = mostrarComando("5,5/1,2N/IAIAIAIAA")
    expect(result).toEqual("5,5/1,2N/IAIAIAIAA");
  });
  
  it("Debería procesar el comando ingresado y devolver la posicion inicial", () => {
    const result = procesarComando("5,5/1,2N/IAIAIAIAA")
    expect(result[1]).toEqual("1,2N");
  });
  it("Debería procesar el comando ingresado y desglosar la dimension", () => {
    const result = procesarComando("5,5/1,2N/IAIAIAIAA")
    const desglose = desglosarDimension(result[0]);
    expect(desglose).toEqual([5,5]);
  });
  it("Debería procesar el comando ingresado y desglosar la posicion inicial", () => {
    const result = procesarComando("5,5/1,2N/IAIAIAIAA")
    const desglose = desglosarPosicionInicial(result[1]);
    expect(desglose).toEqual([1,2,"N"]);
  });
  it("Debería procesar el comando ingresado y desglosar los movimientos", () => {
    const result = procesarComando("5,5/1,2N/IAIAIAIAA")
    const desglose = desglosarMovimiento(result[2]);
    expect(desglose).toEqual(["I","A","I","A","I","A","I","A","A"]);
  });
  it("Debería procesar el comando ingresado y devolver la posicion final del autito", () => {
    const result = ejecutar("5,5/3,3N/IADA")
    expect(result).toEqual("2,4N");
  });
  it("Debería devolver 'Error de comando' si en la posicion x es negativo", () => {
    const posicionInicial = [-1, 3];
    expect(validarPosicionInicial(posicionInicial)).toEqual("Error de comando");
  });
  
});