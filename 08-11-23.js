let prova = "ciao";
let prova2 = 'ciao';

// let vuota = ""; stringa vuota

console.log(prova);
console.log(prova2);

let prova3 = "Ciao \n Mondo";
console.log(prova3);

console.log(prova3.length);

//  charat 

// replace

let prova5 = "Ciaoc";
console.log(prova5.replace("c", "s"));
console.log(prova5.replace("ci", "so"));
console.log(prova5.replace("c", "ccccc"));
console.log(prova5.replace("ca", "s"));  //nessuna sostituzione, devono esserevicine

// replace all

console.log(prova5.replaceAll("C", "S")); // ciaoc --> siaos
 // prova5 = prova5.replace("C", "T"); sostituisce la variabile xche riassegnata

//   indexof
console.log(prova5.indexOf("c")); // 0
console.log(prova5.indexOf("i")); //1

let prova6 = "MONDOB";
console.log(prova6.indexOf("m")); // 0 prima occorrenza 
console.log(prova6.lastIndexOf("m")); // 6 ultoma occorrenza

//  substring 
console.log(prova6.substring(0,3)); // da 0 a terzo carattere 
console.log(prova6.substring(1,3)); // dal 1 a 3 carattere --> ON
console.log(prova6.substring(2)); // dal secondo in poi 

// slice
console.log(prova6.slice(1,3)); // parte dalprimo, terzo escluso\ --> ON
console.log(prova6.slice(1,-3)); // dal primo fino alla lunghezza -3 --> OND

//  trim 
let prova7 = " Gabriella Verga      ";
console.log(prova7.trim()); // elimina gli spazi
 
// toUpperCase & lowerCase
console.log(prova7.toUpperCase());
console.log(prova7.toLowerCase());

// includes, startswith, endwith
console.log(prova7.includes("Gabriella"));  // dice che e' vero
console.log(prova7.startsWith("Gabriella"));  // dice che e' falso perche prim ce un carattere vuoto \
console.log(prova7.trim().startsWith("Gabriella"));
console.log(prova7.trim().endsWith("Gabriella"));

//  1. dato la stringa Farflla, riassegnamo il valore gatto e stamparlo 
let variabile = "farfalla";
variabile = "gatto";
console.log(variabile);

//  2. data str Catania verigicare se include una sottostringa e stampare la lunghezza della stringa senza la sottostringa

let stringa = "Catania";
let sottostringa = "ta";
console.log(stringa.includes(sottostringa));

//  ESERCIZI 
// 1. dati due numeri stampare somma 
 function somma(x, y) {
    var a = x + y;
    return a;
 }
var risultato = 9 + 11;

// come andava fattoooo.....
let b = 9;
let c = 11;
console.log(b + c);

 //2. data la str "il mio primo es. JS" stamparla con tuti i caratteri maiuscoli !NON VA
 let prova9 = "Il mio primo esercizio in Javascript";
 console.log(prova9.toUpperCase());

 //3. data la stringa "javascript e' case sensitive" stamparne la lunghezza 
 let prova10 = "Javascript e case sensitive";
 console.log(prova10.length);

// 4. data la str Italia stampare primo e utimo carattere !NON VA
let prova11 = "Italia";
console.log(prova11.indexOf("0"));
console.log(prova11.lastIndexOf("-1"));

// come andava fattoooo.....
let prova14 = "Italia";
let primo = prova14.charAt(0);
let ultimo = prova14.charAt(prova14.length-1);
console.log("PRIMO::", primo, " -- ULTIMO", ultimo);

// altro modo
let testo3 = "Italia";
console.log(testo3.substring(0,1));
console.log(testo3.substring(testo3.length-1,testo3.length));

//altro modo 
conArray = "italia";
let primoCarattere = conArray[0];
console.log("il primo carattere e': " + primoCarattere);
let ultimoCarattere = conArray[conArray.length - 1];
console.log(" l'ultimo carattere e' " + ultimoCarattere);


// 5. date le stringhe Roma Catania somma le loro lunghezze
let stringa1 = "Roma";
let stringa2 = "Catania";
console.log(stringa1.length + stringa2.length);

// 6. data la stringa "PIZZA" stampare la sottostringa che va dal secondo carattere fino alla fine della stringa 
let str = "PIZZA";
let strSotto = console.log(str.slice(1));

// altro modo con substring
let pizza = "Pizza";
let caratteri = pizza.substring(1,pizza.length);
let caratteri2 = pizza.substring;

// I CICLI
 // ciclo for 
console.log("inizio ciclo for +1");
 for(let i = 0; i < 10; i++) {
    console.log(i);
 }

 console.log("inizio ciclo for + 3");
 for(let i = 0; i < 10; i = i + 3) {
    console.log(i);
 }
// i parto da zero, ad ogni interazione aggiungo 1 (i++) e continuo ino a quando e' minore di 10 (i < 10)

// CICLO WHILE
console.log("inizio while");
let j = 0;
while(j < 10) {   // WHILE  (condizione) {insieme di istruzioni}
    j++;
    console.log(j);
}  

// DO WHILE 
console.log("DO while");
let somma = 0; // DO WHILE --> esegue istruzioni DO prima ==> (CONDIZIONE) {insieme di istruzioni} e poi valuta il WHILE (2 momenti)
do{
    somma += 1;
    console.log("SOMMMA:" , somma);
}
while(somma < 10);

// BREAK
console.log("break");
for(let i = 0; i < 10; i++){
    if(i ==5) {
        break;
    }
    console.log(i);
}

// CONTINUE
console.log("continue");
for(let i = 0; i < 10; i++){
    if(i ==5) {
        continue;
    }
    console.log(i);
}
// I CICLI
 // ciclo for 
 console.log("inizio ciclo for +1");
 for(let i = 0; i < 10; i++) {
    console.log(i);
 }

 console.log("inizio ciclo for + 3");
 for(let i = 0; i < 10; i = i + 3) {
    console.log(i);
 }
// i parto da zero, ad ogni interazione aggiungo 1 (i++) e continuo ino a quando e' minore di 10 (i < 10)

// CICLO WHILE
console.log("inizio while");
let j = 0;
while(j < 10) {   // WHILE  (condizione) {insieme di istruzioni}
    j++;
    console.log(j);
}  

// DO WHILE 
console.log("Do while");
let somma = 0; // DO WHILE --> esegue istruzioni DO prima ==> (CONDIZIONE) {insieme di istruzioni} e poi valuta il WHILE (2 momenti)
do{
    somma += 1;
    console.log("SOMMMA:" , somma);
}
while(somma < 10);

// BREAK
console.log("break");
for(let i = 0; i < 10; i++){
    if(i ==5) {
        break;
    }
    console.log(i);
}

// CONTINUE
console.log("continue");
for(let i = 0; i < 10; i++){
    if(i ==5) {
        continue;
    }
    console.log(i);
}

// ESERCIZI: 
// definiamo variabile con valore 100. Sottraiamo il numero 3 per 10 volte 
console.log("ESERCIZIO 1");
for(let k = 100; k < 100; k = k - 3) {
    console.log(k);
}

let variabileNuova;
variabileNuova = 100;
for( let i = 0; i < 10; i++){
    variabileNuova -= 3;
}
console.log(variabileNuova);
// 100; PRIMO CICLO : 100-3; secondo ciclo 97-3; terzo ciclo 94-3; .. per 10 volte

// date le due stringhe "Leone" e "Leotta" verificare se esistonolettere uguali ovvero stesso valore, stesso tipo (maiuscolo, minuscolo) e stessa posizione.
console.log("esercizio 2");
let stringaA = "Leone";
let stringaB = "Leotta";

for(let i = 0; i < stringaA.length; i++){
    if(stringaA.charAt(i) == stringaB.charAt(i)) {
        console.log("Lettere uguali", stringaA.charAt(i), stringaB.charAt(i));
    }
}


// trovate i primi 15 numeri multipli di 3. Attenzione: 1. utilizzare solo un ciclo; 2. le variabili non devono essere create esternamente al ciclo
console.log("esercizio 3");


// stamparei primi 20 numeri pari (usare solo un ciclo).
console.log('esercizio 4');


