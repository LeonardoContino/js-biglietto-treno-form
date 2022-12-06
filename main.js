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
const km = document.getElementById("inputkm");
const userAge = document.getElementById("inputnage");
const button = document.getElementById("click");
console.log("km", "userAge", "button");

//3
buttom = "km" + "userAge";
console.log(buttom);
