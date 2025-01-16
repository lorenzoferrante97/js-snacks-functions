// start es. 3

/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let paroleFinali = [];
let lettera = "A";

// Dichiara la funzione qui.

function matchFirstLetter (arr, lett, res) {
    
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i].charAt(0) == lett) {
            res.push(arr[i])
        }
    }

    return res;
}


// Invoca la funzione qui e stampa il risultato in console

matchFirstLetter(names, lettera, paroleFinali);

console.log(paroleFinali);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]