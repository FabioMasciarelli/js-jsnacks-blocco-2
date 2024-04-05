/**
 * Description placeholder funzione che crea array in base a al  numero inserito
 * 
 *
 * @param {number} number
 * @returns {object}
 */
function generateArray (number, randomNumber) {

    let array =[];
    for (i = 0; i < number; i++) {
        array [i] = [randomNumber];
    }
}

/**
 * Description placeholder funzione per generare un numero random
 * @param {number} max 
 * @param {number} min
 * @returns {number}
 */
function rndNumber (max, min) {
    const rdnValue =0;
    for (i = 0; i < 10 ; i++) {
        rdnValue = Math.floor(Math.random() * (max - min + 1 ) + 1 );
    }
    return rdnValue;
};