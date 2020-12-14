// Il programma dovrà chiedere all’utente:
// 1) il numero di chilometri che vuole percorrere
// 2) l’età del passeggero.
// 3) il prezzo totale del viaggio.

// Il prezzo del biglietto è definito in base
// ai km (0.21 € al km)

// va applicato uno sconto del:
// 20% per i minorenni
// 40% per gli over 65

var km = prompt("Inserisci il numero di chilometri che dovrai percorrere");
var age = prompt("Inserisci la tua età");
var prodotto = km * 0.21 ;

if (age < 18){
  prodotto * 20 / 100;
}
else (age > 65){
  prodotto * 40 / 100;
}
document.getElementById('prezzo').innerHTML = + " $" ;
