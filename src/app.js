/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = ExcuseGenerator;
//write your code here
let who = ["mi hermana pequeña,", "mi sobrina,", "mi Madre,", "mi Abuela,"];
let action = [
  "se enfermó y tuve que hacerme cargo de su cuidado,",
  "se extravió en la ciudad y estuvo toda la noche fuera,",
  "tuvo que ser hospitalizada,",
  "perdió la cabeza y se dió a la fuga, tuve que salir a buscarla,"
];
let apologise = [
  "lo siento mucho, lo tendré listo al finalizar el día.",
  "pido mil disculpas, se lo entregaré hecho al acabar la jornada.",
  "lo lamento, trataré de resolverlo en un momento.",
  "por ello disculpeme, me ocuparé de inmediato."
];
let when = ["anoche,", "ayer por la noche,", "el viernes pasado por la noche,"];
function ExcuseGenerator() {
  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomApologise = Math.floor(Math.random() * apologise.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  let ExcusaCompleta =
    "No he podido por que," +
    " " +
    when[randomWhen] +
    " " +
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    apologise[randomApologise];

  document.querySelector("#completeExc").innerHTML = ExcusaCompleta;
}

document.getElementById("refreshButton").addEventListener("click", function() {
  ExcuseGenerator();
});
