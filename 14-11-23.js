utenti = new Array();
function aggiungiUtente(){
    let nome = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let city = document.getElementById("city").value;
    //console.log(nome , surname , city); 
    utenti.push(nome+" "+surname+" "+city);
    //console.log(utenti);
}

/*creare una libreria di oggetti (almeno 4). Ogni oggetto deve contenere i seguenti attributi:
    - nome => stringa
    - autore => Stringa
    - letto => boolean true se è stato letto, false altrimenti
    - dataDiPubblicazione => Data
    - capitoli => array bidimensionale. Ad Esempio [[1,4], [2, 5]] il primo capito è formato da 4 pagine, il secondo è formato da 5 pagine
    - stampaCompertina() => funzione che restituisce una stringa formata da nome + autore + anno
    - stampaPagineCapitoli() => funzione stampa il numero di pagine suddive per capitoli
    - anno() => funzione che restituisce l'anno di pubblicazione
    - eventuali funzioni di supporto che potrebbero esservi utili
1. stampare le pagine totali dei libri
2. stampare l'elenco dei libri letti
3. stampare le pagine totali dei libri letti
////4. ordinare i libri per anno di pubblicazione
4. estrarre il json, in forma di stringa, della libreria e passarlo ad un vostro collega. Il vostro collega dovrà:
    - importare la stringa json;
    - contare il numero di libri;
    - contare il numero di libri di un determinato autore (fornito dal collega)
*/
 
// function libro(nome,autore,letto,dataPubblicazione,capitoli){
//     this.nome = nome;
//     this.autore = autore;
//     this.dataPubblicazione = dataPubblicazione;
//     this.letto = letto;
//     this.capitoli = capitoli;
//     this.stampaCopertina = function(){
//         return this.nome + " " + this.autore + " " + this.getAnno();
//     }
//     this.stampaPagineCapitoli = function(){
//         for(var capitolo of this.capitoli){  
//             console.log("Capitolo" + capitolo[0] + " , pagine: " + capitolo[1]);
//         }
//     }
//     this.getAnno = function(){
//         return dataPubblicazione.getFullYear(); 
//     }
//     // funzione di supporto
//     this.numeroTotaleDiPagine = function(){
//         var sommaPagine = 0;
//         for(var capitolo of this.capitoli){
//             sommaPagine += capitolo[1];
//         } 
//         return sommaPagine;
//     }
// }
// // new Date();
// var libro1 = new libro("Pinocchio", "collodi", true, new Date(2018, 1,12), [[1,5],[2,7]]);
// var libro2 = new libro("Cuore", "de amicis", false,  new Date(2020, 1,12), [[1,6],[2,8]]);
// var libro3 = new libro("La Divina Commedia", "Dante", false, new Date(2019, 11,12), [[1,7],[2,9]]);
// var libro4 = new libro("I Promessi sposi", "MAnzoni", true, new Date(2001, 1,12), [[1,8],[2,10]]);
// var libro5 = new libro("l'uomo che non reggeva l'alcool","Maccio Capatonda",true,new Date(2005,20,9),[[1,500]]);
// var libro6 = new libro("I Promessi Sposi","Manzoni",false,new Date(1987, 1,12),[[1,5],[2,7]]);
// var libro7 = new libro("Storia di una ladra di libri","Markus Zusak",true,new Date(2010, 1,12),[[1,7],[2,20],[3,12],[4,20]]);
// var libro8 = new libro("Cambiare senza paura","Roberto Re",true,new Date(2019, 1,12),[[1,17],[2,3],[3,30]]);
// var libro9 = new libro("Il monaco che vendette la sua Ferrari","Robin Sharma",true,new Date(2011, 1,12),[[1,17],[2,3],[3,30]]);

// var libreria = new Array(libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9);

// for(var libro of libreria){
//     console.log("LIBRO:" + libro.stampaCopertina());
// }

// // 1) Stampare le pagine totali dei libri
// var numeroPagine = 0;
// for(var libro of libreria){
//     numeroPagine += libro.numeroTotaleDiPagine();
// }
// console.log("Il numero totale di pagine e'" + numeroPagine);

// // 2) stampare i libri letti
// for(let libro of libreria){
//     if(libro.letto){
//         libro.stampaCopertina();
//     }
// }
// // 3) Stampare le pagine totali dei libri letti
// var numeroPagineLibriLetti = 0;
// for(var libro of libreria){
//     if(libro.letto){
//         numeroPagineLibriLetti += libro.numeroTotaleDiPagine();
//     }
// }
// console.log("Il numero totale di pagine e'" + numeroPagineLibriLetti);


// var libreriaFormatoStringa = JSON.stringify(libreria);

// var libreriaS = '[{"nome":"Libro 0","autore":"Autore 0","letto":false,"dataDiPubblicazione":"2013-01-31T23:00:00.000Z","capitoli":[[0,16],[1,14],[2,28],[3,20]]},{"nome":"Libro 1","autore":"Autore 1","letto":false,"dataDiPubblicazione":"2015-01-31T23:00:00.000Z","capitoli":[[0,23],[1,35],[2,27],[3,10]]},{"nome":"Libro 2","autore":"Autore 2","letto":false,"dataDiPubblicazione":"2016-01-31T23:00:00.000Z","capitoli":[[0,38],[1,12],[2,21],[3,11]]},{"nome":"Libro 3","autore":"Autore 3","letto":false,"dataDiPubblicazione":"2002-01-31T23:00:00.000Z","capitoli":[[0,10],[1,15],[2,18],[3,28],[4,15],[5,13],[6,12],[7,29]]},{"nome":"Libro 4","autore":"Autore 4","letto":false,"dataDiPubblicazione":"2011-01-31T23:00:00.000Z","capitoli":[[0,13],[1,29],[2,39],[3,30]]},{"nome":"Libro 5","autore":"Autore 5","letto":false,"dataDiPubblicazione":"2004-01-31T23:00:00.000Z","capitoli":[[0,17],[1,18],[2,31],[3,24],[4,26],[5,24]]},{"nome":"Libro 6","autore":"Autore 6","letto":false,"dataDiPubblicazione":"2008-01-31T23:00:00.000Z","capitoli":[[0,14],[1,16],[2,21],[3,14],[4,38],[5,37],[6,32],[7,11],[8,13]]},{"nome":"Libro 7","autore":"Autore 7","letto":false,"dataDiPubblicazione":"2002-01-31T23:00:00.000Z","capitoli":[[0,34],[1,20],[2,27],[3,37],[4,10],[5,18],[6,36],[7,11],[8,21]]},{"nome":"Libro 8","autore":"Autore 8","letto":false,"dataDiPubblicazione":"2008-01-31T23:00:00.000Z","capitoli":[[0,11],[1,21],[2,25]]},{"nome":"Libro 9","autore":"Autore 9","letto":false,"dataDiPubblicazione":"2019-01-31T23:00:00.000Z","capitoli":[[0,33],[1,24],[2,34],[3,15],[4,11],[5,34],[6,19]]}]';

// var libreriaNuova = JSON.parse(libreriaS);

// for(var libro of libreriaNuova){
//     console.log(libro.nome);
// }


/* 
1) Modificare l'esercizio libreria affinché la libreria venga visualizzata su una tabella, dove ogni riga corrisponde ad un libro.
    Ogni libro dovrà avere le seguenti informazioni:
    1. nome (text)
    2. autore (text)
    3. Data di uscita del libro (non anno)
    4. Numero di pagine totali del libro (integer)
-    RICERCA: sopra la tabella deve essere presente un input type text ed un bottone "cerca". Al click del bottone devono essere cercati tutti i libri dell'autore scritto sulla text. Le righe dei libri trovati devono essere colorate di verde (potete ridisegnare la tabella). Attenzione, il nome dell'autore potrebbe essere incompleto, ad esempio ricerca per nome e/o cognome

INSERIMENTO: creare una form per inserire un nuovo libro. 
1. controllare che tutti i campi siano stati inseriti e che abbiano dei valori corretti.
2. Il nuovo libro correttamente inserito deve essere visualizzato sulla tabella 
    (potete ridisegnare la tabella).

CANCELLA: creare una form per eliminare un libro.
1. Il libro può essere cancellato solo se vengono selezionati il nome e l'autore del libro.
2. Se uno dei due campi non è settato allora deve apparire un alert di avviso (potete ridisegnare la tabella).
*/

function book(name, author, isRead, pubDate, chapters, id) {
    this.name = name;
    this.author = author;
    this.isRead = isRead;
    this.pubDate = pubDate;
    this.chapters = chapters;
    this.id = id;
}

const personalLibrary = [
    new book("Il Signore degli Anelli", "J.R.R. Tolkien", true, "1954-07-29", [[50, 40], [30, 25]], 23467),
    new book("Harry Potter", "J.K. Rowling", false, "1997-06-26", [[20, 30], [35, 40]], 345789),
    new book("1984", "George Orwell", true, "1949-06-08", [[30, 25], [40, 35]], 128),
    new book("Cronche di Narnia", "C.S. Lewis", false, "1950-10-16", [[25, 30], [20, 25]], 78234),
    new book("Lo Hobbit", "J.R.R. Tolkien", true, "1950-06-21", "234", 2378),
]
const printChapPages = (book) => {
    let sum = 0;
    book.chapters.forEach((x) => sum += x[1]);
    return sum;
}
const searchForm = document.getElementById("searchForm");
const addForm = document.getElementById("addForm");
const deleteForm = document.getElementById("deleteForm");

// funzione per popolare tabella 
function populateTable() {
    personalLibrary.forEach((x) => {

    const row = document.createElement("tr");
    row.setAttribute("id", x.id)

    const cellName = document.createElement("td");
    cellName.innerText = x.name;
    row.appendChild(cellName);
    const cellAuthor = document.createElement("td");
    cellAuthor.innerText = x.author;
    row.appendChild(cellAuthor);
    const cellPubDate = document.createElement("td");
    cellPubDate.innerText = x.pubDate;
    row.appendChild(cellPubDate);
    const cellPages = document.createElement("td");
    cellPages.innerText = typeof(x.chapters) === "string" ? x.chapters : printChapPages(x);
    row.appendChild(cellPages);

    tbody.appendChild(row);
})}

// funzione pulisci tabella 
function clearTable() {
    const tbody = document.getElementById("tbody");
    const head = document.getElementById("head")
    while (tbody.lastChild !== head) {
            tbody.removeChild(tbody.lastChild);
      }
}

// funzione popola 
function populateSelect(info) {
    const select = document.getElementById("deleteAuthor");
    const otherSelect = document.getElementById("deleteBook");

    personalLibrary.forEach((x) => {
        const option = document.createElement("option")
        option.innerText = x[info];
        if(info === "author") {
            select.appendChild(option)
        }
        else if(info === "name") {
            otherSelect.appendChild(option)
        } else {
            console.log("invalid operation")
        }
    })
}
function clearSelect() {
    const select = document.getElementById("deleteAuthor");
    const defaultAuthor = document.getElementById("defaultAuthor");
    const otherSelect = document.getElementById("deleteBook");
    const defaultBook = document.getElementById("defaultBook");


    while (select.lastChild !== defaultAuthor) {
        select.removeChild(select.lastChild);
    }

    while (otherSelect.lastChild !== defaultBook) {
        otherSelect.removeChild(otherSelect.lastChild);
    }
}
function searchAuthor(e) {
    e.preventDefault();
    const searchParam = document.getElementById("author").value.toLowerCase();
    personalLibrary.forEach((x) => {
        const authArr = x.author.split(" ");
        for(let i = 0; i < authArr.length; i++) {
            const el = authArr[i].toLowerCase();
            const row = document.getElementById(x.id);
            if(el === searchParam) {
                row.style.backgroundColor = "#ADFF2F";
                break;
            }
            row.style.backgroundColor = "transparent"
        }
    })

}
function addBook(e) {
    e.preventDefault();
    const addBook = document.getElementById("addBook").value;
    const addAuthor = document.getElementById("addAuthor").value;
    const addPubDate = document.getElementById("addPubDate").value;
    const addChapters = document.getElementById("addChapters").value;
    personalLibrary.push(new book(addBook, addAuthor, false, addPubDate, addChapters, (Math.random()*5)));
    clearTable();
    clearSelect();
    populateSelect("name");
    populateSelect("author");
    populateTable();
}

function deleteBook(e) {
    e.preventDefault();
    const deleteBook = document.getElementById("deleteBook").value;
    const deleteAuthor = document.getElementById("deleteAuthor").value;

    if(deleteBook === "Choose a book" || deleteAuthor === "Choose an author") return;

    const elToDelete = personalLibrary.filter((x) => deleteAuthor === x.author).filter((x) => deleteBook === x.name).pop();
    
    if(!elToDelete) return;

    const index = personalLibrary.indexOf(elToDelete);
    personalLibrary.splice(index, 1);
    clearTable();
    clearSelect();
    populateSelect("name");
    populateSelect("author");
    populateTable();

}

searchForm.addEventListener("submit", searchAuthor);
addForm.addEventListener("submit", addBook);
deleteForm.addEventListener("submit", deleteBook);
populateTable();
populateSelect("name");
populateSelect("author");

function searchAuthor(e) {
    e.preventDefault();
    const searchParam = document.getElementById("author").value.toLowerCase();
    personalLibrary.forEach((x) => {
        const row = document.getElementById(x.id);
        if(x.author.toLowerCase().includes(searchParam)) {
            row.style.backgroundColor = "#ADFF2F";
            return;   
        }
        row.style.backgroundColor = "transparent"
    })

}


// ////////////////////////////////////////////////////////////

function getUrl(url){
    return new Promise(function(resolve, reject){
        let http = new XMLHttpRequest(); 
        http.onreadystatechange = function(){
            let data;
            if(http.readyState == 4){ // verifica se è stata completata
                if(http.status == 200){ // se è andato a buon fine 404 errore -- 500 server
                    data = JSON.parse(http.responseText);
                    resolve(data);
                }
                else{
                    reject(new Error(http.statusText));
                }
            }
        }

        http.open("GET",url,true);
        http.send();
    });
}
async function getFetch(url){
    let response = await fetch(url);
    console.log(response);
    return await response.json();
}
async function testChiamata(){
    try{
        //let dati = await getUrl("https://jsonplaceholder.typicode.com/posts/1");
        let dati = await getFetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log(dati);
    }
    catch(e){
        console.log("Errore", e);
    }
    finally{
        console.log("finito");
    } 

}
testChiamata();

/* 
Supponiamo di voler gestire un social per utenti. 
Questo social tiene molto alla privacy dei propri utenti, pertanto ha deciso che nella lista di utenti il loro nome deve essere sostituito 
utilizzando il cifrario di cesare con chiave = 3. Questo significa ad esempio che il nome alfio sarebbe DOINR, perché spostando di 3 lettere A ottengo D; ATTENZIONE, per questo metodo deve essere utilizzata la FUNZIONE MAP.

Per ogni utente possiamo vedere: 
1) tutti i suoi post; 
2) i commenti relativi ad un determinato post; 
3) tutti gli album pubblicati; 
4) per ogni album tutte le foto; 
5) la lista di cose da fare. Solo le cose già fatte devono essere colorate di verde. 
6) inoltre ogni utente può inserire un nuovo post.
*/

/* La lista di API per effettuare l'esercizio è la seguente:
    - https://jsonplaceholder.typicode.com/users (GET) : lista di tutti gli utenti
    - https://jsonplaceholder.typicode.com/posts?userId=1 (GET) : Lista di tutti i post di un utente con id = 1
    - https://jsonplaceholder.typicode.com/posts?userId=1 (GET): lista dei commenti di un post con id = 1
    - https://jsonplaceholder.typicode.com/albums?userId=1 (GET): Lista di tutti gli album di un utente con id= 1
    - https://jsonplaceholder.typicode.com/photos?albumId=1 (GET): Lista di foto di un album con id=1
    - https://jsonplaceholder.typicode.com/posts (POST): inserimento di un nuovo post. L'oggetto da passare in alla post è il seguente:
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        });
    - https://jsonplaceholder.typicode.com/todos?userId=1 lista di cose da fare per l'utente con id = 1
    */

    ////////////////////////////
        function cesar(string) {
            const arr = string.split("").map((x) => {
            return String.fromCharCode(x.charCodeAt(0) + 3 )
            }).join("")
            return arr
            }


    async function getFetch(url){
        let response = await fetch(url);
        const json = await response.json();
        console.log(json);
        return await json;
    }
    async function exampleCall(url){
        try{ // il try fa la chamamta, fa partire il get fetch qui dentro 
            //let dati = await getUrl("https://jsonplaceholder.typicode.com/posts/1");
            let dati = await getFetch(url);
            console.log(dati);
            dati.forEach((x) => console.log(x.title));
        }
        catch(e){
            console.log("Errore", e);
        }
        finally{
            console.log("finito");
        } 
    
    }
    exampleCall("https://jsonplaceholder.typicode.com/posts?userId=1");
    exampleCall("https://jsonplaceholder.typicode.com/posts?userId=1");
    exampleCall("https://jsonplaceholder.typicode.com/albums?userId=1")
