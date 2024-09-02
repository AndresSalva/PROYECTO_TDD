import auto from "./auto";
import Superficie from "./superficie";

function mostrarComando(comando) {
    return comando;
}
function procesarComando(comando) {
  const [dimensionesSuperficie, posicionInicial, comandosMovimiento] = comando.split('/');
  return [dimensionesSuperficie,posicionInicial,comandosMovimiento];
}
function desglosarDimension(dimensionesSuperficie){
  const [filas, columnas] = dimensionesSuperficie.split(',').map(Number);
  return [filas, columnas];
}
function desglosarPosicionInicial(posicionInicial){
  const [x, y] = posicionInicial.slice(0, -1).split(',').map(Number);
  const direccion = posicionInicial.slice(-1);
  const desglosado = [x, y].concat(direccion);
  return desglosado;
}
export {mostrarComando,procesarComando,desglosarDimension,desglosarPosicionInicial};