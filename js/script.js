// visualizzare in pagina 5 numeri casuali
// implement function con math random da 1 a 50 per creare numeri
// creo * 5 volte un li con il numero myRandom
// metto un timer di 30 secondi (intanto vanno bene 3 per vedere che funzioni)
// metto d-none ai numeri originali e lo levo al form
// quando utente clicca submit, controllo che indipendentemente dall'ordine
// i numeri di input matchino quelli generati da myRandom
// BONUS aggiungere validazione (rileggi consegna)

//============== Variabili Global =================================

// identifico l'ul in cui devo inserire i li con numero random
const numbersList = document.querySelector('#numbers-list');
// creo array vuoto dove pushare i miei numeri random
const numbersRange = [];

// creo una funzione per generare 5 numeri random e push in array
 const randomNumber = myRandom(1,50)

console.log(randomNumber);



// li pusho nella ul