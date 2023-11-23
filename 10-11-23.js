// const nuovo_titolo = "nuovo titolo modificato"; // variabile da asegnare

// function modificaTesto() {
//     // abbiamo preso il nostro elemento 
//     let elemento_titolo = document.getElementById("titolo1") 
//     // cerchiamo di modificare il testo dell'elemento
//     elemento_titolo.innerText = nuovo_titolo;
    
// }



/* In questa esercitazione, avrai una lista (ul) con alcuni elementi (li). L'obiettivo è imparare come aggiungere dinamicamente nuovi elementi e rimuoverli utilizzando JavaScript. Crea due funzioni: aggiungiElemento() che aggiunge un nuovo elemento alla lista con il testo "Nuovo Elemento", e rimuoviElemento() che rimuove l'ultimo elemento dalla lista. */

// const nuovo_elemento = "nuovo elemento"
function aggiungiElemento() {
    //identifica lista
    let contenitore = document.getElementById('list')
    //creato elemento
    let nuovo_elemento = document.createElement('li')
    // elemento_modificato.createElement(nuovo_elemento-li)
    //inserito testo
    // nuovo_elemento.textContent = "nuovo elemento"
    // abbiamo collegato le due cose
    contenitore.appendChild(nuovo_elemento)
}

function rimuoviElemento() {
    let contenitore = document.getElementById("list")
    // let elemento = document.removeChild(contenitore)
    let elemento_rimosso = contenitore.lastElementChild // lastelementchild e' uuna proprieta'
    contenitore.removeChild(elemento_rimosso)
}

/* ###################################################
ESERCIZI POMERIGGIO  ############################## */



