/**
 * Description placeholder funzione che verifica quale parola sia la più lunga
 * @date 5/4/2024 - 12:30:32
 * 
 * @param {string} firstWord
 * @param {string} secondWord
 * @returns {string}
 */
function wordLength (firstWord, secondWord ) {
    if (firstWord.length > secondWord.length) {
        console.log(firstWord);
    } else if (firstWord.length < secondWord.length){
        console.log(secondWord);
    } else {
        console.log(firstWord, secondWord);
    }
}