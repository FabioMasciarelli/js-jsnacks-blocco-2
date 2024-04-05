/**
 * Description placeholder
 *
 * @param {object} array
 * @returns {string}
 */
function stampa (array) {
    let result="";

    for (i = 0; i < array.length; i++) {

        if(i < array.length - 1) {
            result += array[i] + ",";
        } else {
            result += array[i];
        }
        // console.log(result);
    }
    
    return result;
}