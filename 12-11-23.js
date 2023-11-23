/* Scrivi una funzione chiamata calcolaAreaCerchio che prende il raggio di un cerchio come parametro e restituisce l'area del cerchio. Puoi utilizzare il valore di π (pi greco) come 3.14.

Scrivi una funzione chiamata invertiStringa che prende una stringa come parametro e restituisce la stringa invertita. Ad esempio, se la stringa è "ciao", la funzione dovrebbe restituire "oaic".

Scrivi una funzione chiamata sommaNumeri che prende un numero intero positivo come parametro e restituisce la somma di tutti i numeri da 1 a quel numero. Ad esempio, se il numero è 5, la funzione dovrebbe restituire 15 (1 + 2 + 3 + 4 + 5).

Scrivi una funzione chiamata contaVocali che prende una stringa come parametro e restituisce il numero di vocali presenti nella stringa. Ad esempio, se la stringa è "ciao", la funzione dovrebbe restituire 3.

Scrivi una funzione chiamata verificaPalindromo che prende una stringa come parametro e restituisce true se la stringa è un palindromo (stessa lettura da sinistra a destra e viceversa), altrimenti restituisce false. Ad esempio, se la stringa è "radar", la funzione dovrebbe restituire true. */

console.log("ES. 1");
/* 
Scrivi una funzione chiamata calcolaAreaCerchio che prende il raggio di un cerchio come parametro e restituisce l'area del cerchio. Puoi utilizzare il valore di π (pi greco) come 3.14. 
*/

// function calcolaAreaCerchio(raggio) {
//     return raggio * 3.14
// }
// calcolaAreaCerchio(raggio(5))

console.log("ES. 2");
/* 
Scrivi una funzione chiamata invertiStringa che prende una stringa come parametro e restituisce la stringa invertita. Ad esempio, se la stringa è "ciao", la funzione dovrebbe restituire "oaic". 
*/
function invertiStringa(stringa) {
    let spezzaStringa = stringa.split("");
    let reverseArray = spezzaStringa.reverse()
    let joinArray = reverseArray.join("");
    console.log(joinArray);
    return joinArray;
}
invertiStringa("hello");

/* Scrivi una funzione chiamata conteggioVocali che accetti una stringa come parametro e restituisca il numero di vocali presenti nella stringa. Le vocali considerate sono: "a", "e", "i", "o", "u".

Ad esempio, se chiami la funzione conteggioVocali("ciao mondo"), dovrebbe restituire il valore 4, poiché ci sono 4 vocali ("i", "a", "o", "o") nella stringa "ciao mondo". */

function conteggioVocali(testo) {
    conteggio = 0;
    for (let i = 0; i < testo.length; i++) {
        if (testo[i] === "a" || testo[i] === "e" || testo[i] === "i" || testo[i] === "o" || testo[i] === "u") 
        {
            conteggio ++
        }
    }
    return conteggio;
}
console.log(conteggioVocali("conta le vocali in questa strnga"));
console.log(conteggioVocali("Javascript e' ostico e odioso"));
console.log(conteggioVocali("chissa' quando lo capiro'"))

console.log("ES. 3")
/*
Scrivi una funzione chiamata sommaNumeri che prende un numero intero positivo come parametro e restituisce la somma di tutti i numeri da 1 a quel numero. Ad esempio, se il numero è 5, la funzione dovrebbe restituire 15 (1 + 2 + 3 + 4 + 5).
*/
function sommaNumeri(numero) {
    let somma = 0;
    for (let i = 1; i <= numero; i++) {
        somma += i;
    }
    return somma;
}
console.log(sommaNumeri(5));
console.log(sommaNumeri(10));
console.log(sommaNumeri(15));
console.log(sommaNumeri(20));
console.log(sommaNumeri(25));

/*
Scrivi una funzione chiamata trovaNumeroMinimo che prende in input un array di numeri e restituisce il numero più piccolo presente nell'array.
*/
let myArray = [ 33, 52, 662, 3,]

function trovaNumeroMinimo(array) {
    let numeroMinimo = array[0]; 
    // inizializza numero minimo con primo elemento array
    for (let i = 1; i < array.length; i++) {
        if (array[i] < numeroMinimo) {
            numeroMinimo = array[i];
        }
    }
    return numeroMinimo;
}
console.log(trovaNumeroMinimo([51, 15, 6, 8, 22]))
console.log(trovaNumeroMinimo(myArray))


// AGGIORNARE VARIABILE ######################################

let nome = "giada"
nome = "luca"
console.log(nome)

const name1 = "patty"
// name1 = "Oscar" non si puo' riassegnare un valore ad una constante
console.log(name1)


// NUMERI & OPERATORI MATEMATICI ######################################

const numero = '43';
console.log(Number(numero) + 10) // in questo modo trasformi un nr stringa in numero
// % operatore RESTO 
// ** operatore POTENZA
const resto = 40 % 5 // numero pari
console.log(resto)

const resto1 = 43 % 2 // numero dispari
console.log(resto1)
console.log("\n")

// operatori di incremento e dcremento ++ --  #################################
let incremento = 11;
incremento++;
let decremento = 11;
decremento--;
console.log(incremento);
console.log(decremento);

// operatori COMPARATIVI ######################################

// === compara sia il valoreche il tipo
// !== chiede se e' di diverso valore e tipo
// == compara il valore NON il tipo
// != complara se diverso valore, NON tipo
// < minore a
// > maggiore a 
// <= minore / uguale a
// >= maggiore / uguale a 
//mancano video 3 + video 4 specks

// METODI STRINGHE ###################################################
let string = "Questa e' una Stringa"
console.log(string.length) // lunghzza stringa
console.log(string[0]); // primo valore stringa
console.log(string[string.length-1]) // ultimo carratere string (parte da 0)
console.log(string.indexOf('una')) // da dove parte il conteggio di 'una'
let indexCorso = string.indexOf('una') // definisco la mia stringa
console.log(string.slice(indexCorso)) // la taglio da dove mi interessa
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.replace('Stringa', 'stregoneria')) 
// sostituisce la prima con la seconda parola

// GLI ARRAY ##########################################################
console.log("\n")

let citta = "Roma,Torino,Milano,Napoli"
let data = citta.split(',') // da stringa ad array 
console.log(data)
// console.log(arrayy) // richiamare l'array e mostra i dati
// console.log(arrayy[1]) // accede al dto nell'array
// console.log(arrayy[arrayy.length -1]) // accede all'ultimo elemento arrray

let citta1 = ["Roma", "Torino", "Milano" , "Napoli"]
let data1 = citta1.join('-') // da array a stringa
console.log(data1)

citta1.unshift("Genova") // UNSHIFT aggiunge dal primo
console.log(citta1)

citta1.shift("Genova") // SHIFT toglie il primo elemento
console.log(citta1)

citta1.push("Firenze") // PUSH aggiunge in coda
console.log(citta1)

citta1.pop("Firenze") // POP toglie dalla coda
console.log(citta1)


// CONDIZIONI IF ELSE e SWITCH #########################################
console.log("\n")

let cognome = "Rossi";
let numb = "15";
// cambiando la proprieta' di "cognome" sopra cambia il risultato!
if (cognome == "Rossi") {
    console.log("ciao Rossi!")
} else if (cognome == "Colombo") {
    console.log("Ciao Colombo")
} else {
    console.log("ciao Anonimo")
}
// ** // 
if (numb > 20) {
    console.log("OK")
} else {
    console.log("non va bene")
}
// ** // 
if (numb <= 20) {
    console.log("OK")
} else {
    console.log("non va bene")
}
// ** // questo 20 e' una stringa, quindi ok
if (numb == 15) {
    console.log("OK")
} else {
    console.log("non va bene")
}
// ** // 20 e' una stringa non un numero, quindi non e' uguale
if (numb === 15) {
    console.log("OK")
} else {
    console.log("non va bene")
}
// ** // se num (15) e' minore di 20 entra
// IF dentro IF (innestato)
if (numb < 20) {
    //e compie questo ragionamento
    if(numb % 2 == 0){
        console.log('numero pari')
    } else{
        console.log('numero dispari')
    }
} 
// ** // con && (AND) TUTTO DEVE COMBACIARE, per questo non va bene

if (numb < 20 && numb % 2 == 0) {
    console.log('ok')
} else {
    console.log('non va bene')
}
//  ** // con || OR solo una condizione basta che combaci, ecco perche' e' OK

if (numb < 20 || numb % 2 == 0) {
    console.log('ok')
} else {
    console.log('non va bene')
}

// Il !not verifica che LA NEGAZIONE e' vera (!CATTIVISSIMO....)

let nomeNegazione = 'Giada';

if (!(nomeNegazione === 'Rossi')){
    console.log('ok')
} else {
    console.log('non va bene')
}
// essendo 'Giada' DIVERSO da 'Rossi' il risultato e' OK

let isOnline = true; 

if (!isOnline) { // QUI STO VERIFICANDO SE NON E' ONLINE
    console.log("non e' online")
} else {
    console.log("e' online")
}

// SWITCH statement (quando IF ELSE diventa lungo si preferisce SWITCH..)
// il break serve per evitare che il codice vada avanti
let animale = "pesce"

switch (animale) {
    case "gatto":
        console.log("Ciao Gatto!")
        break
    case "cane":
        console.log("Ciao Cane!")
        break
    case "riccio":
        console.log("ciao Riccio!")
        break
    default: // usato come l'ultimo else di else if
    //se non si verifica nessuna condizione di quelle elencate sopra...
        console.log("non so che animale sei")
}
console.log("\n")
// ternary operator (condizione) ? si o no
let mattoni = 15
// condizione nella variabile
// sono i mattoni (15) maggiori di 20? 
// se si mandi a schermo gialli
// se nomi mandi a schermo verdi
let colori = (mattoni > 20) ? "Gialli" : "Verdi"
console.log(colori)

// I LOOPS - CICLI (mmmmmmmmmmh......) #########################################
// ############################################################################
console.log("\n")
let arrayyy = [55, 88, 94, 72, 2]
// per ogni volta che succede questo mi fai questo
for(let i=0; i <arrayyy.length; i++) {
    // al primo numero pari che trovi esci 
    if(arrayyy[i] == 94) {
        break;
    }
    console.log(arrayyy[i]);
}
console.log("\n")
// qui chiedo di mandare a schermo tutti i nr pari
for(let i=0; i <arrayyy.length; i++) {
    // al primo numero pari che trovi esci 
    if(arrayyy[i] % 2 == 0) {
        continue;
    }
    console.log(arrayyy[i]);
}

// WHILE & DO WHILE verifica condizione ed esegueil codice solo se si verifica

console.log("\n")
let i = 1;
while(i<arrayyy.length){
    console.log('while :', arrayyy[i -1])
    i++
}

// DO WHILE verifica la condizione a prescindee 
// lo utilizziamo qunado vogliamo che il codice venga messo a schermo almeno una volta, anche prima dellaverifica della condizione 

let k = 1;
do {
    console.log("do while : ", arrayyy[k -1]);
    k++
    }while(k<arrayyy.length)

// FUNZIONI ################################################################################################################################################################################################################################################
// insieme di azioni che vogliamo far fare al nostro programma quando gli diamo un esecuzione
// Metodi sono funzioni di OGGETTI
