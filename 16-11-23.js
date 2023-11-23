// async function testChiamata(){
//     try{ // il try fa la chamamta, fa partire il get fetch qui dentro 
//         //let dati = await getUrl("https://jsonplaceholder.typicode.com/posts/1");

//     // await permette di fare la chiamata e aspettarla fino a quando non viene risolta
//         let dati = await getFetch("https://jsonplaceholder.typicode.com/todos/1");
//         console.log(dati);
//         // dati.forEach((x) => console.log(x.title));
//         let par = document.getElementById("par");
//     }
//     catch(e){
//         console.log("Errore", e);
//     }
//     finally{
//         console.log("finito");
//     } 

// }

// Questa è una funzione che fa una richiesta a un server remoto usando fetch
function effettuaChiamataGET() {
    // Utilizza la funzione fetch per fare una richiesta GET a un endpoint specifico
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // Quando la risposta è disponibile, converti il corpo della risposta in formato JSON
        .then(response => response.json())
        // Quando i dati JSON sono disponibili, aggiorna un elemento HTML con quei dati
        .then(data => {
            // Trova un elemento HTML con l'id 'risultatoGET' e aggiorna il suo testo con i dati JSON formattati
            document.getElementById('risultatoGET').textContent = JSON.stringify(data, null, 2);
        })
        // Se si verifica un errore durante la richiesta, mostra un messaggio di errore nella console
        .catch(error => console.error('Errore durante la chiamata GET:', error));
}


/*
Realizza una pagina web con un pulsante. 
Quando l'utente clicca sul pulsante, esegui una chiamata GET a un API pubblico 
(ad esempio, JSONPlaceholder) per ottenere 
e visualizzare dati sul documento.
*/

async function effettuaChiamataGET() {
    try {
        let dati = await getUrl("https://jsonplaceholder.typicode.com/todos/1");
        //let dati = await getFetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(dati);
        //dati.then(response => response.json()).then(json => console.log(json));
        let info = fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(json => console.log(json));
        
        let par = document.getElementById('risultatoGET');
        //par.innerText = response.toString();
        par.innerText = JSON.stringify(dati);
        console.log();
        
    } catch (e) {
        console.log("Errore", e);

    } finally {
        console.log("finito");
    }
}


async function getFetch(url) {
    let response = await fetch(url);
    console.log(response)
    return await response.json();
}

function getUrl(url) {
    return new Promise(function (resolve, reject) {
        let http = new XMLHttpRequest();

        http.onreadystatechange = function () {
            let data;
            if (http.readyState == 4) {
                if (http.status == 200) {
                    data = JSON.parse(http.responseText);
                    resolve(data);
                } else {
                    reject(new Error(http.statusText));
                }
            }
        }
        http.open("GET", url, true);
        http.send()
    });
}

/* Crea una pagina con un modulo di login che raccoglie username e password. Quando l'utente invia il modulo, effettua una chiamata POST a un endpoint di un server (simulato con un servizio come MockAPI) con i dati del modulo
*/ 
function login(){
const newTask = {
    content: 'Check out mockapi.io',
    completed: false,
  };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // do something with the new task
    console.log(task)
  }).catch(error => {
    // handle error
    console.log(error)
  })
}

// Esercizio 1
// scrivere una funzione che fetcha un film per id
// e mi ritorna vero o falso in base al fatto che 
// nel film ci sia Chewbacca
// -> characters

async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }

  /* "characters": [
        "https://swapi.dev/api/people/1/",
        ...
    ],

fingiamo che chewbacca sia la stringa
"https://swapi.dev/api/people/2/" */

async function hasChewbacca(Id) {
    try {
      const response = await fetch(`https://swapi.dev/api/films/${Id}/`);
      const movieData = await response.json();
  
      if (response.ok) {
        // Verifica se Chewbacca è presente tra gli URL dei personaggi del film
        const chewbaccaPresent = movieData.characters.some((characterURL) =>
          characterURL.includes("chewbacca")
        );
  
        return chewbaccaPresent;
      } else {
        console.error(
          "Errore nella richiesta:",
          response.status,
          response.statusText
        );
        return false;
      }
    } catch (error) {
      console.error("Errore durante la fetch:", error.message);
      return false;
    }
  }
  // Esempio di utilizzo della funzione
  const Id = 1; // Sostituisci con l'ID del film desiderato
  hasChewbacca(Id).then((result) => {
    if (result) {
      console.log("Chewbacca è presente nel film!");
    } else {
      console.log(
        "Chewbacca non è presente nel film o si è verificato un errore."
      );
    }
  });

  // SINTASSI CON ASYNC AWAIT (NEW)
async function logIfChewbaccaIsInMovie(id){
    try {
        const isTrue = await getIsChewbaccaInMovieById(id)
        if(isTrue){
            console.log("Chewbacca is here!")
        } else {
            console.log("Chewbacca is not here!")
        }
    } catch(error){
        console.log("errorrrre, ", error)
    } finally {
        console.log("c'è un'errore o no io vengo eseguito")
    }
    
}

logIfChewbaccaIsInMovie(1)

/*
Utilizzando fetchMovieById 1
se non ci sono errori nella chiamata stampo un'ul nel DOM
con tutti i "planets" ( ogni planet è in un tag li)
mostriamo sopra alla lista un tag h1 con il titolo del film (title)
e il numero di episodio ( episode_id )
se c'è un'errore mostriamo nel DOM un testo che segnala che c'è stato 
un'errore
in ogni caso ( nel finally ) alla fine 
mostrare un h3 con scritto "è bello conoscere altri appassionati"
*/

async function logIfChewbaccaIsInMovie(id){
    try {
        const isTrue = await getIsChewbaccaInMovieById(id)
        if(isTrue){
            console.log("Chewbacca is here!")
        } else {
            console.log("Chewbacca is not here!")
        }
    } catch(error){
        console.log("errorrrre, ", error)
    } finally {
        console.log("c'è un'errore o no io vengo eseguito")
    }
    
}

logIfChewbaccaIsInMovie(1)