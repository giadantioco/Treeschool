//Visualizzare il primo e l'ultimo item dell'array
//aggiungere gli elementi 21,7,4
//stampare tutti i numeri pari
//eleminare l'elemento con valore 2
//##################################################################
let array = [3, 2, 31, 23, 4];

//##################################################################
console.log(array[0], array[array.length - 1]); //Stampo primo e ultimo item

//##################################################################
array.push(21, 7, 4); //aggiungo 21 7 e 4 in coda

//##################################################################
//Stampa tutti i numeri pari
//Faccio un ciclo che parte da 0 finche non arriva alla lunghezza dell'array
for (let i = 0; i < array.length; i++) {
  //Controllo che il numero sia pari utilizzando il modulo % che mi restituisce il resto della divisione
  //In questo caso 2 è il divisore
  if (array[i] % 2 == 0) {
    //Quindi se il resto della divisione è 0 allora il numero è pari e lo stampo a schermo
    console.log("Pari: " + array[i]);
  } else {
    //console.log("Dispari: " + array[i]);
    //Qui ho lasciato commentato perche non mi serve ma nel caso abbiamo automaticamente tutti i numeri dispari qua dentro
  }
}
//##################################################################
//Elimino l'elemento con valore 2
//Faccio un ciclo che parte da 0 finche non arriva alla lunghezza dell'array anche qui
for (let i = 0; i < array.length; i++) {
  // controllo se il numero della  mia array "array" in posizione "i"(indice) sia uguale al numero* (* in questo caso ma funziona anche con i le stringhe)
  // sia uguale al numero che cerco in questo caso 2
  if (array[i] == 2) {
    // se lo è entro nell'if e uso splice per eliminare un elemento in posizione "i" e l'1 sta a indicare quanti elementi andrò ad eliminare in questo caso ne voglio togliere uno solo
    array.splice(i, 1);
  }
}
//Lo stampo a schermo
console.log(array);

//Utilizzo un altro metodo per eliminare l'elemento
//Inizializzo e Dichiaro una nuova variabile "array2"
let array2 = [3, 2, 31, 23, 4];
//Mi trovo la posizione dell'elemento con valore 2
let posizioneIndicie = array2.indexOf(2);
//E faccio la stessa cosa che ho fatto sopra con splice ed elimino l'elemento in posizione "posizioneIndicie" (l'1 sta a indicare quanti elementi andrà ad eliminare)
array2.splice(posizioneIndicie, 1);
//Lo stampo a schermo
console.log(array2);

//##################################################################
//Dato il seguente array ["gatto","cane","renna","pinguino","coccodrillo"]
//Stampare tutte le parole con doppie consonanti (ad esempio renna)
//Aggiungere tre animali
//Sommare tutte le lettere dell'array
let arrayAnimali = ["gatto", "cane", "renna", "pinguino", "coccodrillo"];

//##################################################################

//Stampo tutte le parole con doppie consonanti (Questo mi ha fatto penare per un pò maledetto! e non sò nemmeno se è il più efficente è spartano ma funziona)
//Dichiaro due variablii "utlimalettera" e "parola"
let ultimalettera = "";
let parola = "";

//Inizio il primo ciclo che parte da 0 finche non arriva alla lunghezza dell'array
for (let i = 0; i < arrayAnimali.length; i++) {
  //mi prendo l'elemento all'indice "i" quindi la mia prima parola e la inserisco in "parola" il .toString() trasforma qualsiasi elemento ci sia e lo cambia in una stringa
  //fosse stato anche un boolean "True" o "False" diventava una stringa e veniva trattata come testo
  parola = arrayAnimali[i].toString();
  //Dopodiche inzizo il secondo ciclo che parte da 0 finche non arriva alla lunghezza della parola
  for (let j = 0; j < parola.length; j++) {
    //appena inizia mi prendo la prima lettera in posizione "j" stavolta cosi da scorrere una per una le lettere nelal parola
    ultimalettera = parola.charAt(j);
    //Subito dopo controllo che la lettera in posizione "j" - 1 sia uguale all'ultima lettera che mi ero preso in precedenza
    //Quindi controllo che siano uguali se lo sono entro nel if
    if (parola.charAt(j - 1) == ultimalettera) {
      //Stampo la parola trovata
      console.log(parola);
      //Break interrompe il ciclo(occhio sono nel secondo ciclo quindi interromperà SOLO questo e continuerà con una nuova parola)
      break;
    }
  }
  //Uscito dal secondo ciclo torno nel primo e per evitare bug "pulisco la variabile" rimettendola a "" così nel caso la nuova parola
  //iniziasse con la stessa lettera della parola precendente mi darebbe anche quella come buona!
  ultimalettera = "";
}

//##################################################################
//Aggiungo tre animali
arrayAnimali.push("leone", "cavallo", "scoiattolo");

//##################################################################
//Sommare tutte le lettere dell'array
//Dichiaro una variabile "somma"
//e la assegno uguale all'array concatenato utilizzando il metodo join e dandogli "" vuoto semplicemente me li unisce in una stringa
//"gattocanerennapinguinococcodrilloleonecavalloscoiattolo" così
//e con length mi restituisce la lunghezza della stringa in se (55 in questo caso)
//avremmo potuto fare come abbiamo fatto sopra e per ogni parola contare ogni lettera e aggiungerle a un contatore ma chi ce lo fa fare così è molto più rapido
let somma = arrayAnimali.join("").length;

console.log(somma);
