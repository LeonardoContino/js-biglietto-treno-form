// console.log("js ok");

/*
traccia
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

*/

/*
 0. mettere elementi del dom
 1. chiedere il numero di chimoletri che deve fare con input
 2. chiedere l'età al passeggiero con input
 -3 collare bottone a km e età per calcolarlo
4.applicare sconto minorenne e over 65 con il select
5.validare km e età
6.validare il prezzo in decimale
7.fare l'estetica con il css
*/

// 0
const button = document.getElementById("click");
const km = document.getElementById("inputkm");
const userAge = document.getElementById("inputage");
let finalprice = document.querySelector(".finalprice");
// console.log(finalprice);
const ageminore = document.getElementsByClassName("ageminore");
const ageadult = document.getElementsByClassName("ageadult");
const ageover65 = document.getElementsByClassName("ageover65");

//3
button.addEventListener("click", function () {
  //   console.log(km.value, userAge.value, button);
  let price = km.value * 0.21;
  //   console.log(price);
  if (km <= 0) {
    alert("i dati inseirti non sono corretti");
  } else {
    if ((ageover65.value = over65)) {
      price = price * 0.6;
    } else if ((ageminore.value = minorenne)) {
      price = price * 0.8;
    }
    finalprice.innerText = price.toFixed(2) + "€";
  }
});
//4
