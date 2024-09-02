import auto from "./auto";
import Superficie from "./superficie";

function mostrarComando(comando) {
    return comando;
}
function procesarComando(comando) {
  const [dimensionesSuperficie, posicionInicial, comandosMovimiento] = comando.split('/');
  return [dimensionesSuperficie,posicionInicial,comandosMovimiento];
}
export {mostrarComando,procesarComando};