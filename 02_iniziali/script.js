//start es. 2

/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let iniziali = [];

// Dichiara la funzione qui.

function estraiIniziali (arr, arrIniz) {

    for (let i = 0; i < arr.length; i++) {
        arrIniz.push(arr[i].charAt(0));
    }

    return arr;
}


// Invoca la funzione qui e stampa il risultato in console

estraiIniziali(names, iniziali);

console.log(iniziali)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]