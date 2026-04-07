
//=====FUNZIONE PER CALCOLARE NUMERO RANDOM TRA DUE NUMERI==========

    function myRandom(minValue, maxValue) {
        return Math.floor(Math.random() *  (maxValue - minValue + 1)) + minValue; // restituisce numero random tra intervallo di numeri
    }

//==================================================================

//========= funzione per generare 5 numeri random ==================

function myRandomNumbersGenerator() {

    for (let i = 0; i <= 4; i++) {
        let randomNumber = myRandom(1, 50);
        numbersRange.push(randomNumber);
    }

    return numbersRange;

}

//================== Funzione pull Numeri in intefaccia utente =======================
// racchiudo tutti in funzione di modo che si crei 
// interfaccia utente in un colpo solo

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


//================= Countdown Handler ====================================//

function countdownHandler() {
    console.log('Dentro countdownHandler');
    
    countdownValue--;

    if (countdownValue >= 0) {
        console.log(countdownValue);
        countdownElem.innerHTML = `${countdownValue}!`;
    } else { // -1
        clearInterval(intervalId);
        // togliamo d-none al form
        userForm.classList.remove('d-none');
        //  add d-none ai miei numerini e countdown
        numbersList.classList.add('d-none');
        countdownElem.classList.add('d-none');
    }
}
