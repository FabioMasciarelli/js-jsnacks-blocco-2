// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// chiediamo all'utente di inserire due parole

const firstWord = prompt("dimmi una parola");
const secondWord = prompt("dimmi una parola");

const result = wordLength(firstWord, secondWord);
console.log(result);


