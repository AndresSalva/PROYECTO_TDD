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
  const validacionPosicion = validarPosicionInicial(posicionInicial);
  if (validacionPosicion !== true) {
    return validacionPosicion; 
  }
  const movimientos = desglosarMovimiento(partes[2]);
  const superficie = new Superficie(dimension[0],dimension[1]);
  let autito = new auto(posicionInicial[0],posicionInicial[1],posicionInicial[2]);
  let autitoRespaldo = new auto(posicionInicial[0],posicionInicial[1],posicionInicial[2]);
  if (!superficie.validarSuperficie()){
    return "Superficie invalida";
  }
  else{
    for (const movimiento of movimientos) {
      if(autito.validarMovimiento(movimiento)){
        autito.Avanza_o_Gira(movimiento);
        if(validarPosicionFinal(autito,superficie)){
            autitoRespaldo.respaldarAutito(autito);
        }
        else{
            autito.respaldarAutito(autitoRespaldo);
        }
      }
      else{
        return movimiento + " no es un movimiento valido";
      }
    }
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

function validarPosicionFinal(auto, superficie) {
  const [filas, columnas] = superficie.mostrarSuperficie();
  const { posX, posY } = auto;
  return posX >= 0 && posX <= columnas && posY >= 0 && posY <= filas;
}


export {mostrarComando,procesarComando,desglosarDimension,desglosarPosicionInicial,desglosarMovimiento,ejecutar,validarPosicionInicial,validarPosicionFinal};