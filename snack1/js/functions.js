/**
 * Description placeholder funzione per generare N numeri random in un array
 * @param {number} max 
 * @param {number} min
 * @returns {number}
 */
function rndNumber (max, min, randomsN) {
    let rdnValue =0;

    let array =[];

    for (i = 0; i < randomsN ; i++) {
        rdnValue = Math.floor(Math.random() * (max - min + 1 ) + 1 );
        array.push(rdnValue);
    }
    
    console.log(array);
    return array;
};

