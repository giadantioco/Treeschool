// URL della risorsa da richiedere
const apiUrl = 'https://swapi.dev/api/people/';

// Opzioni della richiesta (nel caso di una richiesta GET, le opzioni sono solitamente opzionali)
const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json', // Specifica il tipo di contenuto della richiesta
    // Altri eventuali header possono essere specificati qui
  },
  // Altri eventuali parametri della richiesta, come il corpo della richiesta (inutile per una richiesta GET)
};

// Effettua la richiesta utilizzando fetch
fetch(apiUrl, requestOptions)
  .then(response => {
    // Verifica se la risposta è OK (codice 200-299)
    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status} - ${response.statusText}`);
    }
    // Parsifica la risposta JSON
    return response.json();
  })
  .then(data => {
    // Fai qualcosa con i dati ricevuti
    console.log('Dati ricevuti:', data);
  })
  .catch(error => {
    // Gestisci gli errori
    console.error('Si è verificato un errore durante la richiesta:', error);
  });

  const postData={
    userId:6,
    title: "fare la spesa",
    complited: false
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    //formato al contrario, bisogna stringifare il Json
    body: JSON.stringif(postData),
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  