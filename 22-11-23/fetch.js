// mock 
import products from "./mock.json" assert {type: "json"};

//Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
//Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
//Esercizio 3 dato il mock di partenza, stampa in consolela lista dei prodotti che costano meno di 200 euro

//Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)

//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock

//Esercizio 6 dato il mock di partenza, stampa in console il prodotto con id 9, (ATTENZIONE:come oggetto non come lista)

// esercizio 7 : dato ilmock di partenza,stampa in console tutti i prodotti con piu' di 30 pezzi in stock 

console.log(products.productsList);
console.log(products.productsList[2]);
console.log(products.productsList.filter((prod) => prod.price < 200));
console.log(products.productsList.find((prod) => prod.id === 8));
products.productsList.map((prod) => {
    if (prod.id === 8) {
        console.log(prod);
    }
});
console.log(products.productsList.map((prod) => prod.name));

// esercizi extra

console.log(products.productsList.find((prod) => prod.id === 9));

const moreInStock = (products.productsList.filter((prod) => prod.stock > 30))
if (moreInStock.length > 0) {
    console.log("products overdue", moreInStock)    
} else {
    console.log("No products with more than 30 in stock")
}




