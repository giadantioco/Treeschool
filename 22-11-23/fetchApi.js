const url="https://jsonplaceholder.typicode.com/todos";
// prendiamo una url
fetch(url,{
    //fetchamo la url con un metodo
    method: "GET",
    headers: {
        accept: "application/json",
    }
    //in questo momento aspetto la risposta
}).then((response)=>{
    // se lo stato non e' ok generami un errore
    if (!response.ok){
        throw new Error(response.status)
    }
    //altrimenti ritornami i dati richiesto
    return response.json();
})
.then((data)=>{
    console.log(data);
    // stampiamo i dati
    
})