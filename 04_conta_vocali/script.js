// start es. 4

/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let counterVocali = 0;
let vocaliEstratte = [];

// Dichiara la funzione qui.

function estraiVocali (par, res) {

    for (let i = 0; i < par.length; i++) {
        if ((par.charAt(i) == "a") ||
        (par.charAt(i) == "e") ||
        (par.charAt(i) == "i") ||
        (par.charAt(i) == "o") ||
        (par.charAt(i) == "u"))
        {
            counterVocali++;
            res.push(par[i]);
        }
    }

    return res;
}


// Invoca la funzione qui e stampa il risultato in console

estraiVocali(word, vocaliEstratte);
console.log(`${counterVocali} `, vocaliEstratte.join(","))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)