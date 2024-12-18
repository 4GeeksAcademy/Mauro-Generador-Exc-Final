/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(){
  excuseGenerator();
} 

function excuseGenerator() {
  let who = ["mi hermana pequeña,", "mi sobrina,", "mi Madre,", "mi Abuela,"];
  let action = [
    "se enfermó y tuve que hacerme cargo de su cuidado,",
    "se extravió en la ciudad y estuvo toda la noche fuera,",
    "tuvo que ser hospitalizada,",
    "perdió la cabeza y se dió a la fuga, tuve que salir a buscarla,"
  ];
  let apology = [
    "lo siento mucho, lo tendré listo al finalizar el día.",
    "pido mil disculpas, se lo entregaré hecho al acabar la jornada.",
    "lo lamento, trataré de resolverlo en un momento.",
    "por ello disculpeme, me ocuparé de inmediato."
  ];
  let when = ["anoche,", "ayer por la noche,", "el viernes pasado por la noche,"];
  
  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomApology = Math.floor(Math.random() * apology.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  let excusaCompleta =
    "No he podido por que," +
    " " +
    when[randomWhen] +
    " " +
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    apology[randomApology];

  document.querySelector("#complete-excuse").innerHTML = excusaCompleta;
}

document.getElementById("refresh-button").addEventListener("click", function() {
  excuseGenerator();
});
