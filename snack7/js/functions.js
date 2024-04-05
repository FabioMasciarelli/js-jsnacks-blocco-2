function rimuoviDallaTesta (array) {
    let arrayB = [];

    for (let i = 1; i < array.length; i++) {
        const A = array[i];
        arrayB.push(A);
    }

    return arrayB;
}