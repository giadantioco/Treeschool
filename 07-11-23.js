// ARRAYS & CICLI
 /* Creiamo un’array con 5 o più stringhe a vostro piacere. 
Utilizzate i console.log per stampare a console indice e stringa all’indice per prendere confidenza e vedere cosa succede ad ogni esecuzione! */

 const myList = [
    "Lucia",
    "Maria",
    "Marta",
    "Giovanni",
    "Simone"
 ]
 for(let i = 0; i < myList.length; i++){
    console.log[i]
    console.log(myList[i])
 };
 
 /* Creiamo un’array con 10 o più stringhe a vostro piacere di lunghezza differente. 
Utilizzate i console.log per stampare a console solamente le stringhe la cui lunghezza è maggiore o uguale a 10 caratteri. */

console.log("ESERCIZIO 2");

const myArray = [
   "Giorgina",
   "Giorgetta",
   "MilanoMarittima",
   "Toronto",
   "Pontedilegno",
   "valpratosoana",
   "campigliasoana",
   "ingria",
   "pontcanavese",
   "roncocanavese"
]
for(let i = 0; i < myArray.length; i++){
   if(myArray[i].length >= 10) {
   console.log(myArray[i])
   }
};


/* Scrivi un ciclo che cicli i numeri da 1 a 100. Per i numeri multipli di 3 stampa "Fizz" mentre per i multipli di 5 stampa "Buzz". Per i numeri che sono multipli sia di 3 che di 5 stampa "FizzBuzz". */

console.log("ESERCIZIO FIZZ-BUZZ, RICHIESTISSIMO AI COLLOQUI. Bisogna leggere il problema e capire la richiesta, in questo caso bisogna esegure prima riga 3, poi riga 1 ed infine riga due, perche' uno esclude l'altro ")
for (let i = 1; i <= 100; i++) { // l'indice parte da 1. non a 0 come negli array-stringhe
   if(i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz", i) // la i ti fa vedere i umeri
   } //in testa ci va questa condizione perche' e' piu' specifica
   else if (i % 3 === 0) {
      console.log("Fizz", i)
   }
   else if (i % 5 === 0) {
      console.log("Buzz", 1)
   }
   else {
      console.log("rest", i)
   }
} // VERAMENTE RICHIESTO AI COLLOQUI,DA IMPARARE LA LOGICA NON A MEMORIA


/*Creaiamo un’array di oggetti.
Ogni oggetto rappresenta una persona che si presenta all’ufficio e ha proprietà name, age, monthOfBirth (mese nascita).
Crea un ciclo per cui ogni persona se ha meno di 18 anni viene invitata ad uscire per limite di età insufficiente (con un log), se ha almeno 18 anni controlliamo se ha più di 60 anni, se si la invitiamo ad uscire per limite di età superato. 
Se non è stata bloccata da questi controlli le annunciamo che il costo per ottenere la patente è 500€ (sempre log), ma se il suo nome inizia con la R ha diritto ad uno sconto del 20% su tale prezzo (loggare sconto e cifra scontata). */
//OPERATORE TERNARIO

const persone = [
   { name: "Riccardo", age: 12, montOfBirth: "Gennaio" },
   { name: "Mario", age: 30, montOfBirth: "Febbraio" },
   { name: "Giovanni", age: 25, montOfBirth: "marzo" },
   { name: "Baldo", age: 35, montOfBirth: "Aprile" },
   { name: "Paola", age: 40, montOfBirth: "luglio" },
   { name: "Roberto", age: 50, montOfBirth: "Settembre" },
   { name: "Guido", age: 65, montOfBirth: "dicembre" },
];
for ( let i = 0; i < persone.length; i++) {
   console.log(i, persone[i].name);
   if(persone[i].age < 18 ) {
      console.log('Esci dalla pagina');
   } else if (persone[i].age >= 18) {
      if(persone[i].age > 60) {
         console.log("Esci signore!");
      } else {
         console.log("il costo della patente e' 500");
         if(persone[i].name[0] === "R") {
            console.log("hai uno sconto del 20%, daje!");
         }
      }
   }
}