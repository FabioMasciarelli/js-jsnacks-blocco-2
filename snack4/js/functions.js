/**
 * Description placeholder funzione che trova la posizione di un elemento in un array
 * @param {string} elem
 * @param {object} array
 * @returns {number}
 */
function trovaIndice (array, elem) {

    for (let i = 0; i < array.length; i++) {
        if(elem === array[i]) {
            return i;
        }
    }

    return -1;
}



