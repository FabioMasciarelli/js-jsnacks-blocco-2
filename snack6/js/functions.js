/**
 * Description placeholder
 *
 * @param {object} array
 * @returns {object}
 */
function rimuoviDallaCoda (array) {

    let arrayB = [];
    for(let i = 0; i <array.length - 1; i++) {

        const A = array[i];
        arrayB.push(A);
    }

    return arrayB;

}