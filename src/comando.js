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
function desglosarMovimiento(comandosMovimiento){
  const movimientos = comandosMovimiento.split('');
  return movimientos;
}
function ejecutar(comando){
  const partes = procesarComando(comando);
  const dimension = desglosarDimension(partes[0]);
  const posicionInicial = desglosarPosicionInicial(partes[1]);
  const movimientos = desglosarMovimiento(partes[2]);
  const superficie = new Superficie(dimension[0],dimension[1]);
  const autito = new auto(posicionInicial[0],posicionInicial[1],posicionInicial[2]);
  for (const movimiento of movimientos) {
    autito.Avanza_o_Gira(movimiento);
  }
  return autito.mostrarPosicion();
}

function validarPosicionInicial(posicionInicial) {
  const [x, y] = posicionInicial;
  if (x < 0 || y < 0) {
      return "Error de comando";
  }
  return true;
}

export {mostrarComando,procesarComando,desglosarDimension,desglosarPosicionInicial,desglosarMovimiento,ejecutar,validarPosicionInicial};