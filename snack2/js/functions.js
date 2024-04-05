/**
 * Description placeholder funzione che verifica quale parola sia la più lunga
 * @date 5/4/2024 - 12:30:32
 * 
 * @param {string} firstWord
 * @param {string} secondWord
 * @returns {string}
 */
function wordLength (firstWord, secondWord ) {

    let message ="";
    if (firstWord.length > secondWord.length) {
        message = `la prima parola è più lunga`;
    } else if (firstWord.length < secondWord.length){
        message = `la seconda parola è più lunga`;
    } else {
        message = `le parole sono lugnhe uguali`;
    }

    return message;
}