/*Esercizio 4: Calcola il fattoriale
Scrivi una funzione che accetti un numero intero come argomento e restituisca il suo fattoriale.
 Il fattoriale di un numero n è il prodotto di tutti i numeri interi positivi da 1 a n.*/



function fatt(n){
    let fattoriale = 1;

    for(i=n; i >= 1; i--){
        fattoriale = fattoriale * i
    }
    return fattoriale;
}
console.log(fatt(5));

/* Esercizio 5: Trova il numero maggiore
Scrivi una funzione che accetti un array di numeri come argomento e restituisca il numero più grande presente nell'array.*/
let myArray = [1,23,3,4,5];

function numMaggiore(array) {
    let myVariable = 0;
    for(i=0; i < array.length; i++) {
        if (array[i] > myVariable) {
            myVariable = array[i];
        }
    }
    return myVariable;
}
console.log(numMaggiore(myArray)) 

/* Esercizio 6: Stampa un triangolo
Scrivi un programma che utilizzi un ciclo for per stampare un triangolo di asterischi */

function stampaTriangolo(numeroRighe) {
    for (let riga = 1; riga <= numeroRighe; riga++) {
      let rigaAsterischi = " "; 
      // Inizializza una stringa vuota per la riga corrente
  
      for (let colonna = 1; colonna <= riga; colonna++) {
        rigaAsterischi += "*"; 
        // Aggiunge un asterisco alla riga corrente ad ogni iterazione
      }
  
      console.log(rigaAsterischi); 
      // Stampa la riga corrente sulla console
    }
  }
console.log(stampaTriangolo(10));  

/*Esercizio 7: Conta le vocali
Scrivi una funzione che accetti una stringa come argomento e 
restituisca il numero di vocali presenti nella stringa.*/
/*Esercizio 7: Conta le vocali
Scrivi una funzione che accetti una stringa come argomento e 
restituisca il numero di vocali presenti nella stringa.*/

let string = "bla bla bla";

function contaVocali(stringa) {
    let vocale = 0;
    for(i = 0; i < stringa.length; i++) {
        if (stringa[i] == "a" || stringa[i] == "e" || stringa[i] == "i" || stringa[i] == "o" || stringa[i] == "u") {vocale = vocale + 1}
    }
    return vocale;
}
console.log(contaVocali("ammoniaca"))