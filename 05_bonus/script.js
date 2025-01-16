// start bonus

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let ora = 18;


// Dichiara la funzione qui.

let salutoOrario = (nome) => {

    if ((ora >= 5) && (ora <= 13)) {
        return "Buongiorno";
    } else if ((ora >= 14) && (ora <= 17)) {
        return "Buon pomeriggio";
    } else if ((ora >= 18) && (ora <= 23)) {
        return "Buonasera";
    } else if ((ora == 0) || ((ora >= 1) && (ora <= 4))) {
        return "Buonanotte";
    }
}


// Invoca la funzione qui e stampa il risultato in console

console.log(salutoOrario(name), ` ${name}`)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.