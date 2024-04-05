// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array

const array =[];

// chiedo all'utente di scrivere qualcosa
let user = "";

for (let i = 0; i < 10; i++) {

    user = prompt("dimmi qualcosa");
    array.push(user);
    console.log(array);
    const count = contaElementi(array);
    console.log(count);
}

