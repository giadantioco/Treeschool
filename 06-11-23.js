let myArray = new Array(10);
//console.log(myArray);
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]); 
}
let myArray2 = new Array();
for(let i = 0; i < myArray2.length; i++){
    console.log(myArray2[i]); 
}
let myArray3 = new Array("gatto","cane","leone");
for(let i = 0; i < myArray3.length; i++){
    console.log(myArray3[i]);
    console.log(myArray3[i].charAt(0)); 
}
let myArray4 = [true,"Matteo","Lucia","Catanzaro",124];
for(let i = 0; i < myArray4.length; i++){
    console.log(myArray4[i]);
    //console.log(myArray4[i].charAt(0));  --> ERRORE
}
let myArray5 = new Array("a","b","c");
console.log(myArray5[0]); //a
console.log(myArray5[1]); //b
console.log(myArray5[2]); //c
console.log(myArray5[myArray5.length -1]); //c


let arrayEsempio = [10,21,1]; // length = 3
for(let indice = 0; indice < arrayEsempio.length; indice++){ //0... N-1
    let elemento = arrayEsempio[indice]; //arrayEsempio[0];arrayEsempio[1]; arrayEsempio[2],... 
    console.log(elemento); 
}
console.log(arrayEsempio.length);
// prima iterazione: indice = 0 --> arrayEsempio[0] = 10
// seconda iterazione: indice = 1 --> arrayEsempio[1] = 21
// terza iterazione: indice = 2 --> arrayEsempio[2] = 1

console.log("DOPO..");
arrayEsempio.push(31);
for(let i = 0; i < arrayEsempio.length; i++){
    console.log(arrayEsempio[i]);}


/* Dato il seguente array [3,2,31,23,4]
Visualizzare il primo e l’ultimo elemento. V
Aggiungere gli elemento 21,7,4;
Stampare tutti i numeri pari;
Eliminare l’elemento con valore 2. */ 

console.log("ES.1 : visualizzare primo e ultimo elemento array");

let array = [3,2,31,23,4];
console.log(array[0]);
console.log(array.length - 1);

console.log("ES.2 : aggiungi 3 elementi all'array ( dove non definito )");

array.push(21,7,4);
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

console.log("ES.3 : stampa numeri pari ( e dispari nel mio caso )");

for(let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0) {
        console.log("numero pari: ", array[i]);
    } else {
        (array[i] % 2 == 1) 
            console.log("numero dispari: ", array[i]);
    }
}

console.log("\n");

console.log("ES. 4 : elimina elemento con valore 2");




/* Dato il seguente array ["gatto", "cane", "renna", "pinguino", "coccodrillo"]:
Stampare tutte le parole con doppie consonanti (ad esempio renna); charat
Aggiungere altri tre animali.
Sommare tutte le lettere dell’array. */

let arrayStringhe = ["gatto", "cane", "renna", "pinguino", "coccodrillo"];
for(let i = 0; i < arrayStringhe.length; i++){
    let elemento = arrayStringhe[i];
    if(verificaDoppie(elemento)){
        console.log("Doppie in parola:" , elemento);
    }
}
/**
 * verifica se esistono doppie e restituisce true se le trova, false altrimenti
 */
function verificaDoppie(elem){ // renna 0,1 ; 1,2; 2,3; 4
    //console.log(elem);
    for(let j = 0; j < elem.length-1; j++){
        //console.log(elem[j]);
        if(elem[j] == elem[j+1]){
            return true;
        }
    }
    return false;
}


arrayStringhe.push("leone","farfalla","tigre");

// Sommare tutte le lettere dell’array.
let somma = 0;
for(let i =0; i < arrayStringhe.length; i++){
    somma += arrayStringhe[i].length;
}
console.log("SOMMA:", somma);

// metodo alternativo
let stringaAnimali = arrayStringhe.join("");
console.log(stringaAnimali);
console.log(stringaAnimali.length);


// ******************************************  ESERCIZI POMERIGGIO ******************************************************************

myArray2 = ["Giada","Luca","lucia","Giusy"];

function unite(myArray2) {
    const firstString = [myArray2[0],myArray[1].join("-")];
    const secondString = [myArray2[2], myArray2[3].join("*")];
    return [firstString, secondString];
}
console.log(myArray2);

/* Scriviamo una funzione che prenda come argomento un’array di stringhe a vostro piacimento.
Deve ritornare un nuovo array (quindi l’array input non va manipolato )
che  abbia:
tagliato il primo elemento dell’array originale
tagliato l’ultimo elemento dell’array originale */

const students = ["Barbara","Lara","Paola","Luna",];

function theManipulator(students) {
    const newArray1 = [students[1], students[2], students[3]];
    console.log("sono uguale ?", newArray1 === newArray1);
    newArray1.shift();
    newArray1.pop();
    return newArray1;
}


/* Scriviamo una funzione che prenda come argomento un’array di 10 stringhe a vostro piacimento.

Deve prima creare un nuovo array con solo le stringhe agli indici pari.


Da questo poi deve ritornare un nuovo array che abbia:
tagliato il primo elemento dell’array con indici pari
tagliato l’ultimo elemento dell’array con indici pari


L’array input non va manipolato! */

const food = ["apple", "cheese", "potato", "tomato", "broccoli", "pasta", "bread", "eggs", "flour", "sugar"];

function doppie(food) {
    for(let k = 0; k < food.length; k++){
        if (k % 2 === 0) {
            console.log(food);
        }
    }
}
console.log(food);