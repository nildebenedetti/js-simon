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

//==================================================================

// racchiudo tutti in funzione di modo che si crei interfaccia utente in un colpo solo

function populateNumbers() {


    // invocazione funzione per generare 5 random numbers
    const myFiveNumbers = myRandomNumbersGenerator();

    // creo funzione per scrivere un nuovo li con dentro
    // value di myFiveNumbers
    // il tutto per 5 volte

    for (let i = 0; i <= myFiveNumbers.length - 1; i++) {
        let currentNumber = myFiveNumbers[i];
        // scrtivimi un li con dentro value di currentNumber
        let newLi = document.createElement('li');
        // appendilo
        numbersList.appendChild(newLi);
        // add classe
        numbersList.lastElementChild.classList.add(`number-${i}`);
        // add html con numero i dell array 
        newLi.innerHTML = `${myFiveNumbers[i]}`
    }

}

// invocazione funzione populate numbers

const newPull = populateNumbers();






// li pusho nella ul