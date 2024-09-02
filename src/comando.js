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
export {mostrarComando,procesarComando,desglosarDimension};