/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
  let areatot = l1 * l2;
  console.log(areatot);
  return areatot;
}
area(10, 20);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazysum(x, y) {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
}

const tot = crazysum(5, 5);

console.log(tot);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(a, b) {
  if (a > 19) {
    return (a - b) * 3;
  } else {
    return a - b;
  }
}
const tot1 = crazysum(5, 19);
console.log(tot1);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  if ((n >= 20, n <= 100, n === 400)) {
    return true;
  } else {
    return false;
  }
}
const tot3 = boundary(40);
console.log(tot3);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
  if (stringa === "epicode") {
    return stringa;
  } else {
    return "epicode " + stringa;
  }
}
const testo = epify("epicode");
console.log(testo);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7parola. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(n) {
  if (n > 0 && n % 3 === 0 && n % 7 === 0) {
    return "è positivo e multiplo di 3 o 7";
  } else {
    return "non multiplo";
  }
}
const multiplo = check3and7(1);
console.log(multiplo);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(testo) {
  const diviso = testo.split("");
  const invertito = testo.reverseString("");
  const unione = testo.join("");
  return unione;
}
unione = reverseString("epicode");
console.log(unione);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(stringa1) {
  const divisa3 = stringa1.split(" ");

  return divisa3;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
