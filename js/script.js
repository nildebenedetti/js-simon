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
// dichiaro un array che sara' valorizzato solo con numeri in comune
const commonNumbers = [];
// identifico il div del countdown
const countdownElem = document.querySelector('#countdown');
// setto il numero di iterazioni del countdown intanto 3 cosi non sclero
let countdownValue = 30;
// identifico diov del form
const userForm = document.querySelector('#answers-form');
// identifico istruzioniu utente
const userInstructions = document.querySelector('#instructions');
// identifico il bottone
const formBtn = document.querySelector('.btn-primary');
// identifico variabili per userGuess
const userNumbers = document.querySelectorAll('#input-group > input');
let newPull = [];

//==================================================================

// invocazione funzione populate numbers

newPull = populateNumbers();


// inserisco eventListener per clickHandler

formBtn.addEventListener('click',btnClickHandler);

// ora devo scrivere: dati due array stampami quelli in comune







