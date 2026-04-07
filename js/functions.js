
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