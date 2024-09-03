import {mostrarComando, procesarComando,desglosarDimension,desglosarPosicionInicial,desglosarMovimiento,ejecutar,validarPosicionInicial,validarPosicionFinal} from "./comando.js";
import auto from "./auto";
import Superficie from "./superficie";

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
  it("Debería devolver true si en la posicion x NO es negativo", () => {
    const posicionInicial = [1, 3];
    expect(validarPosicionInicial(posicionInicial)).toEqual(true);
  });
  it("Debería procesar la funcion ejecutar y devolver error si x o y empieza en -1", () => {
    const result = ejecutar("5,5/-1,3N/IADA")
    expect(result).toEqual("Error de comando");
  });
  it("Debería devolver false si la posición del auto está fuera de los límites de la superficie", () => {
    const superficie = new Superficie(5, 5);
    const autoFuera = new auto(6, 3, 'N');
    expect(validarPosicionFinal(autoFuera, superficie)).toBe(false);
  });
  it("Debería devolver 'Error de comando' cuando el auto se mueve fuera de los límites", () => {
    const result = ejecutar("5,5/3,3N/AAA");
    expect(result).toEqual("Error de comando");
  });
  it("Debería devolver la posicion final cuando el auto se mueve dentro de los límites", () => {
    const result = ejecutar("5,5/3,2N/AA");
    expect(result).toEqual("3,4N");
  });
});