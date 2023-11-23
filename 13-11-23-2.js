/**
 * Creare una entità persona con nome Marco, cognome Rossi, età 32 anni. 
 * Creare un’altra entità persona con nome Francesca, cognome Leotta, età 34 anni. 
 * Stampare il nome e cognome della persona più anziana. 
 * Aggiungere ad ogni persona la proprietà sesso, rispettivamente M e F. Stampare le entità femminili. 
 */
let persona1 = {
    nome : "Marco",
    cognome: "Rossi",
    eta : 32
} 
let persona2 = {
    nome : "Francesca",
    cognome: "Leotta",
    eta :34
}
if(persona1.eta > persona2.eta){
    console.log(persona1.nome + " " + persona1.cognome);
}else{
    console.log(persona2.nome + " " + persona2.cognome); 
}

let arrayPersone = [{
    nome : "Marco",
    cognome: "Rossi",
    eta : 32
},{
    nome : "Francesca",
    cognome: "Leotta",
    eta :34
} ]


/** metodo alternativo */
function persona(nome,cognome,eta){
    this.nome = nome,
    this.cognome = cognome,
    this.eta = eta,
    this.stampaNome = function(){     
        console.log("NOME:"+ nome + " , COGNOME: " + cognome);
    }
}

let perso1 = new persona("marco","rossi",32);
let perso2 = new persona("francesca","leotta",34);
perso1.stampaNome();

console.log(perso1);

perso1.sesso = "M";
perso2.sesso = "F";

console.log(perso1);
console.log(perso2);

let person3 = new persona("lucia","bella",62);
person3.sesso = "F";
function verifySes(personaTmp){
    if(personaTmp.sesso == "F"){
        personaTmp.stampaNome();
        console.log(" -- la persona e' di sesso femminile");
    }
}
verifySes(perso1);
verifySes(perso2);
verifySes(person3);


/**
 * Creare una lista di oggetti auto. Ogni auto deve contenere: marca, modello (string), 
 * colore(string) e anno produzione(number).  
	AUTO: bmw, 530, blu, 2021
	AUTO: audi, A6, grigia, 2020
	AUTO: mercedes, c200, blu, 1988
	AUTO: fiat, 126, giallo, 1975
	AUTO: mazda, rx8, rossa, 2015
	AUTO: fiat, panda, bianca, 1985
       - Stampare tutte le auto blu.
       - Creare un nuovo array contenente tutti le auto con anno di produzione  > 2000. 
 */

function auto(marca,modello,colore,anno) {
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
    this.anno = anno;
}
let listaAuto = [
    new auto("bmw", "530", "blu", 2021),
    new auto("audi", "A6", "grigia", 2020),
    new auto("fiat", "126", "rossa", 2021),
    new auto("mercedes", "c200", "blu", 1988),
    new auto("mazda", "rx8", "rossa", 2015),
    new auto("fiat", "panda", "bianca", 1985)
];
// stampiamo auto blu
for(let i = 0; i < listaAuto.length; i++){
    if(listaAuto[i].colore == "blu"){
        console.log("marca: ", listaAuto[i].marca, " ; MODELLO: ", listaAuto[i].modello)
    }
}
// metodo alternativo
let listaAutoBlu = listaAuto.filter ( el => el.colore == "blu");
console.log(listaAutoBlu);

//- Creare un nuovo array contenente tutti le auto con anno di produzione  > 2000. 

let listaAuto2000 = listaAuto.filter ( el => el.anno > 2000);
console.log(listaAuto2000)



/* Creare una libreria di oggetti (almeno 4). Ogni oggetto deve contenere i seguenti attributi:
    nome => stringa
    autore => Stringa
    letto => boolean true se è stato letto, false altrimenti
    dataDiPubblicazione => Data
    capitoli => array bidimensionale. Ad Esempio [[1,4], [2, 5]] il primo capito è formato da 4 pagine, il secondo è formato da 5 pagine
    stampaCopertina() => funzione che restituisce una stringa formata da nome + autore + anno
    stampaPagineCapitoli() => funzione stampa il numero di pagine suddivise per capitoli
    anno() => funzione che restituisce l'anno di pubblicazione
    eventuali funzioni di supporto che potrebbero esservi utili

1. stampare le pagine totali dei libri
2. stampare l'elenco dei libri letti
3. stampare le pagine totali dei libri letti
*/
class libro{
constructor(nome,autore,letto,dataDiPubblicazione,capitoli) {
    this.nome = nome;
    this.autore = autore;
    this.letto = letto;
    this.dataDiPubblicazione = dataDiPubblicazione;
    this.capitoli = capitoli;
}
    stampaCopertina() {
        return this.nome + ' - ' + this.autore + ' - ' + this.dataDiPubblicazione;
    }

    stampaPagineCapitoli() {
        let myArray = this.capitoli
        for(let i = 0; i< myArray.length; i++) {
            for(let j = 0; j < myArray[i].length; j++) {
                console.log(myArray[i][j])
            }
        }
    };

   
}
function stampaPagineTotali (lista){
    let myArray = lista;
    // let myArray = this.capitoli;
    let somma = 0;
    for(let i = 0; i< myArray.length; i++) {
        let prova = listaLibri[i];
        for(let j = 0; j < prova.capitoli.length; j++) {
        somma += prova.capitoli[j][1]
        
        }
        console.log("testo: " + somma)
    }
}
let listaLibri = [
    new libro("il pescatore", "mondadori", "letto", 2000, [[1,4], [2,8]]),
    new libro("Belle donne", "fertinelli", "nonletto", 2009, [[1,4], [2,8]]),
    new libro("Blu Verde Rosso", "zannichelli", "letto", 2005, [[1,4], [2,8]]),
    new libro("Vendetta", "De Agostini", "letto", 2010, [[1,4], [2,8]]),
    new libro("Tremenda", "Treccani", "letto", 2020, [[1,4], [2,8]]),
]

//stampaCopertina() => funzione che restituisce una stringa formata da nome + autore + anno

for(i = 0; i < listaLibri.length; i++) {
    let evento = listaLibri[i];
    console.log(evento.stampaCopertina())
}
//stampaPagineCapitoli() => funzione stampa il numero di pagine suddivise per capitoli
for(i = 0; i < listaLibri.length; i++) {
    let libroTemporaneo = listaLibri[i];
    libroTemporaneo.stampaPagineCapitoli()
}
//stampare le pagine totali dei libri
stampaPagineTotali(listaLibri);