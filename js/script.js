// visualizzare in pagina 5 numeri casuali --ok
// implement function con math random da 1 a 50 per creare numeri --ok
// creo * 5 volte un li con il numero myRandom --ok
// metto un timer di 30 secondi (intanto vanno bene 3 per vedere che funzioni)
// metto d-none ai numeri originali e lo levo al form
// quando utente clicca submit, controllo che indipendentemente dall'ordine
// i numeri di input matchino quelli generati da myRandom
// BONUS aggiungere validazione (rileggi consegna)

//============== Variabili Global =================================

// identifico l'ul in cui devo inserire i li con numero random
const numbersList = document.querySelector('#numbers-list');
// dichiaro variabile per generare i randomNumbers
let randomNumber;
// creo array vuoto dove pushare i miei numeri random
const numbersRange = [];
// creo array vuoto per risposte utente
const userGuess = [];
// identifico il div del countdown
const countdownElem = document.querySelector('#countdown'); 
// setto il numero di iterazioni del countdown intanto 3 cosi non sclero
let countdownValue = 3; 
// identifico diov del form
const userForm = document.querySelector('#answers-form');
// identifico istruzioniu utente
const userInstructions = document.querySelector('#instructions');
// identifico il bottone
const formBtn = document.querySelector('.btn-primary');
// identifico variabili per userGuess
const userNumbers = document.querySelectorAll('#input-group')

//==================================================================

// invocazione funzione populate numbers

const newPull = populateNumbers();

// inserire timer 30 secondi

// scrivo nel div il conto alla rovescia
countdownElem.innerHTML = `${countdownValue}!`;

// setto ogni quanto decrementa il countdown value
const intervalId = setInterval(countdownHandler, 1000);

// inserisco eventListener per clickHandler
// n.B. devo piallare con parametro (event)
// il comportamento default

formBtn.addEventListener('click',btnClickHandler);

// scrivo la mia funzione al click

function btnClickHandler (event) {
    event.preventDefault;

    // registriamo input user in array e poi confrontiamo i valori
    userNum0
    // con il mio newPull
}



