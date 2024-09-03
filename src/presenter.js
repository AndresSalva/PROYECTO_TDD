import {mostrarComando,ejecutar} from "./comando";

const comando = document.querySelector("#comando");
const form = document.querySelector("#comando-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const resultado = comando.value

  div.innerHTML = "<p> Comando realizado: " + mostrarComando(resultado) + "</br> Posicion final: " + ejecutar(resultado) +"</p>";

});
