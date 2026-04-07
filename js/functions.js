
//=====FUNZIONE PER CALCOLARE NUMERO RANDOM TRA DUE NUMERI==========

    function myRandom(minValue, maxValue) {
        return Math.floor(Math.random() *  (maxValue - minValue + 1)) + minValue; // restituisce numero random tra intervallo di numeri
    }

//==================================================================