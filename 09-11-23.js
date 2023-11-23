/*produciamo un array di oggetti in cui ogni oggetto ha:

-proprieta' name
-propriieta' age
-proprieta' subject

*/


/* myStudents = ["Andrea", "Luca", "Riccardo", "Giovanni"];

const myStudentsNew = myStudents.map(function (studentName) {
    return { name: studentName, age: studentName.length * 4 };
  });
  
  console.log(myStudentsNew); */

  const myStudents = ["Andrea", "Luca", "Riccardo", "Giovanni"];



  // *************************************  POMERIGGIO *****************************************************// 

// funzione MAP
let array = [1,2,3,45,67,99];

// aggiungere ad ogni elemento il numero 10
let array2 = new Array();
for(let i = 0; i < array.length; i++){
    array2[i] = array[i] + 10; 
}
console.log(array);
console.log(array2);

let array3 = array.map( el => el + 10); // functoin arrow
console.log(array3);  

let arrayFilt = new Array();
for(let i = 0; i < array.length; i++){
    if(array[i] > 40){
        arrayFilt.push(array[i]);
    }
}
console.log(arrayFilt);

// funzione FILTER valori > 40 => let arrayFiltrato = [45,67,99];
let arrayFiltrato = array.filter(el => el > 40);
console.log(arrayFiltrato);

function name(el){ // nome fnzione , all'interno elementi 
    return el + 10;
}

// function reduce // let array = [1,2,3,45,67,99];
// prec = 0
// current = 1
//0 + 1 => prec

// prec = 1
// current 2 
// 1 + 2  => prec

let somma = 0;
for(let i = 0; i < array.length; i++){
    somma += array[i]
}
console.log(somma);

let somma2 = array.reduce( (prec,current) => prec + current, 0);
console.log(somma2);
 
// for each
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
array.forEach(element => {
    console.log(element);
});

/* Eseguire i seguenti esercizi con e senza i metodi

- Dato il seguente array = [1,2,3,45,6,77,8,9,10] 
moltiplicare tutti i numeri x5 e inserire l'array in uno nuovo
- filtriamo gli elementi compresi tra 5 e 2
- sommiamo tutti gli elementi dell'array
- ottenere il valore del primo elemento dell’array che ha un valore di 18 o superiore:
- stampare l’array risultante  */


console.log("\n");
console.log("ES.1");

myArray = [1,2,3,45,6,77,8,9,10];
const moltArrayCinque = myArray.map(element => element * 5);
console.log(moltArrayCinque);


console.log("\n");
console.log("ES.2");
const filtArrayCinque = myArray.filter(element=>(element>2, element<5));
console.log(filtArrayCinque);

console.log("\n");
console.log("ES.3");
const reduceArrayCinque = myArray.reduce((element1,element2)=>element1 + element2);
console.log(reduceArrayCinque);

console.log("\n");
console.log("ES.4");


const forEachArrayCinque = myArray.find(element =>  element >= 18); 
    console.log(forEachArrayCinque);

/*
1) Leggere la data e mandare un messaggio di: Buongiorno: se l’orario ècompreso tra 00 e 14; Buon Pomeriggio: se l’orario è compreso tra le 14 e le 20; Buonasera: se l’orario ècompreso tra le 20 e le 24. [vardata = new Date()].
alert.log()

2) Crea una funzione che decodifica i numeri nell’intervallo 1-5.  La decodifica trasforma il numero da numero a lettere. 

3) Creare una calcolatrice con soltanto le quattro operazioni base 
(+, *, -, /), l'operazione da eseguire deve essere definita attraverso una funzione esterna che prenda in input tre parametri, rispettivamente il tipo di operazione da eseguire  ed i due numeri su cui fare l'operazione. La funzione deve restituire il risultato e poi stamparlo a video. 
*/

console.log("\n");
console.log("ES.1");

var data = new Date().getHours()
if (data > 00, data<=14){console.log("buon giorno")}
else if (data>14, data<=20){console.log("buon pomeriggio")}
else {console.log("buona sera")}

console.log("ES.2");
console.log("\n");

function functionName(num) {
    let messaggio;
    if(num === 1 ) {
        {messaggio = "A"}
    }
    else if(num === 2 ) {
        {messaggio = "B"}
    }
    else if(num === 3 ) {
        {messaggio = "C"}
    }
    else if(num === 4 ) {
        {messaggio = "D"}
    }
    else if(num === 5 ) {
        {messaggio = "E"}
    }
    else {console.log("numero non valido")}
    return console.log("messaggio");
}
console.log(functionName());

console.log("\n");
console.log("ES.2.aria");

function decodificaNumero(numero) {
    if (numero === 1) {
      return "Uno";
    } else if (numero === 2) {
      return "Due";
    } else if (numero === 3) {
      return "Tre";
    } else if (numero === 4) {
      return "Quattro";
    } else if (numero === 5) {
      return "Cinque";
    } else {
      return "Numero non valido";
    }
  } 
  
  // Esempi di utilizzo della funzione:
  console.log(decodificaNumero(1)); // Output: "Uno"
  console.log(decodificaNumero(3)); // Output: "Tre"
  console.log(decodificaNumero(5)); // Output: "Cinque"
  console.log(decodificaNumero(7)); // Output: "Numero non valido"

console.log("\n");
console.log("ES.3 crea una calcolatrice con valori (+, *, -, /)");

function operazioni (operatore, numero1, numero2){
    let result;
    if (operatore === "+"){result = numero1+numero2}
    else if (operatore === "-"){result = numero1-numero2}
    else if (operatore === "*"){result = numero1*numero2}
    else if (operatore === "/"){result = numero1/numero2}
    else {console.log("operatore non valido")}
    return console.log(numero1, operatore, numero2, "=", result)
}
operazioni("*", 6,3);



// ********************************************* 
// *********************************************


// ESERCIZIO 1 


let array = [1,2,3,45,6,77,8,9,10];
 
// moltiplicare tutti i numeri x5 inserire l'array in uno nuovo
// SENZA MAP
let arrayNuovo = [];
for(let i = 0; i < array.length; i++){
    arrayNuovo.push(array[i] * 5);
}
console.log(arrayNuovo);

// MAP
let arrayNuovo2 = array.map(element => element*5);
console.log(arrayNuovo2);

// filtriamo gli elementi compresi tra 5 e 2 ---  2 < x < 5
// SENZA FILTER
let arrayFiltrato = [];
for(let i = 0; i < array.length; i++){
    if( array[i] > 2 && array[i] < 5){
        arrayFiltrato.push(array[i]);
    }
}
console.log(arrayFiltrato);

// FILTER
let arrayFiltrato2 = array.filter(ele => (ele < 5 && ele > 2));
console.log(arrayFiltrato2);

// sommiamo tutti gli elementi dell'array  
// SENZA REDUCE
let somma = 0;
for(let i = 0; i < array.length; i++){
    somma += array[i];
}
console.log(somma);

// REDUCE
let somma2 = array.reduce( (prevValue, currentValue) => prevValue + currentValue); // prevValue = cumulatore ; currentValue = valore corrente dell'array
console.log(somma2);  


// ottenere il valore del primo elemento dell’array che ha un valore di 18 o superiore:
// SENZA FIND
let elemento;
for(let i = 0; i < array.length; i++){
    if(array[i] >= 18){
        elemento = array[i];
        break;
    }
} 
console.log(elemento);

// FIND
let elem2 = array.find( el => el > 18);
console.log(elem2);

// stampare l’array risultante
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
array.forEach(el => {
    console.log(el);
})



// NOTE

array = [1,23,2,6,3,1];

// molt * 10 e sommare 5

let arrayMap = array.map( pippo => pippo * 10);

function funzioneMap(val){
    val *= 10;
    val += 5;
    return val;
}

let array2 = array.map(funzioneMap);
console.log(array2);

let arrayMap2 = array.map( pippo => {pippo = pippo *10; pippo = pippo + 5; return pippo} );
console.log(arrayMap2);

let arrayMap3 = array.map( function(pippo) {
    pippo = pippo *10; pippo = pippo + 5; return pippo
})
console.log(arrayMap3);

let elem = array.find( el => el > 18);
console.log(elem);

// ESERCIZIO DUE 

/* Esercizio  
	1) Leggere la data e mandare un messaggio di: Buongiorno: se l’orario è compreso tra 00 e 14; 
	Buon Pomeriggio: se l’orario è compreso tra le 14 e le 20; 
	Buonasera: se l’orario è compreso tra le 20 e le 24. [var data = new Date()].
*/

var data = new Date();
console.log(data);
var orario = data.getHours();

if(orario > 0 && orario <= 14) { // verificare se è compreso tra 0 e 14 
	console.log("Buongiorno");
}
else if (orario > 14 && orario < 20) { // verificare se è compreso tra 14 e 20 
	console.log("Buon pomeriggio");
}
else { // tutte le altre condizioni
	console.log("Buonasera");
}

/* Esercizio 
    2) Crea una funzione che decodifica i numeri nell’intervallo 1-5.  La decodifica trasforma il numero da numero a lettere.
*/ 
function decodifica(numero) {
	switch (numero) {
		case 1:
			console.log("uno");
			break;
		case 2:
			console.log("due");
			break;
		case 3:
			console.log("tre");
			break;
		case 4:
			console.log("quattro");
			break;
		case 5:
			console.log("cinque");
			break;
		default:
			console.log("Il numero non e' definito");
	}
}
decodifica(3); 

// Esercizio 3) Creare una calcolatrice con soltanto le quattro operazioni base (+, *, -, /), 
//l'operazione da eseguire deve essere definita attraverso una funzione esterna che prenda in input tre parametri,
//rispettivamente il tipo di operazione da eseguire  ed i due numeri su cui fare l'operazione. La funzione deve restituire il risultato e poi stamparlo a video.

/**
 * Somma tra due numeri
 * @param {number} a  = un intero
 * @param {number} b  = un intero
 * @returns restituisce la somma tra a e b
 */
function sommatoria(a, b) {
	return a + b;
}
/**
 * Moltiplicazione tra due numeri
 * @param {number} a  = un intero
 * @param {number} b  = un intero
 * @returns restituisce la somma tra a e b
 */
function moltiplicazione(a, b) {
	return a * b;
}
function divisione(a, b) {
	if (b == 0)
		return "Divisione non calcolabile";
	return a / b;
}
function sottrazione(a, b) {
	return a - b;
}  
function calcolatrice(operatore, x, y) { 
	//var valoreFinale = 0;
	operatore = (operatore.trim()).toLowerCase();
	switch (operatore) {
		case 'somma':
			return sommatoria(x, y);
		case 'sottrazione':
			return sottrazione(x, y);
		case 'moltiplicazione':
			return moltiplicazione(x, y);
		case 'divisione':
			return divisione(x, y);
		default:
			return "Operazione non supportata";
	}
	return 0;
}
console.log("CALCOLATRICE");
console.log(calcolatrice("SOMMA ", 10, -11));
