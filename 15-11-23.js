// Definizione della classe "Auto"
// class Auto {
//     constructor(marca, modello, tipo) {
//       this.marca = marca;
//       this.modello = modello;
//       this.tipo = tipo;
//     }
//   }
  
//   // Definizione della classe "Concessionario"
//   class Concessionario {
//     constructor() {
//       this.parcoAuto = []; // Array di auto
//       this.clientiRegistrati = []; // Array di stringhe
//     }
  
//     // Funzione per aggiungere un'auto al parco auto
//     aggiungiAuto(auto) {
//       this.parcoAuto.push(auto);
//     }
  
//     // Funzione per visualizzare la lista di auto nel parco auto
//     listaAuto() {
//       console.log("Auto disponibili nel parco auto:");
//       this.parcoAuto.forEach((auto, index) => {
//         console.log(`Auto ${index + 1}: ${auto.marca} ${auto.modello} (${auto.tipo})`);
//       });
//     }
  
//     // Funzione per vendere un'auto
//     vendita(cliente, indiceAuto) {
//       if (this.clientiRegistrati.includes(cliente)) {
//         const autoVenduta = this.parcoAuto[indiceAuto];
//         if (autoVenduta.tipo === "SUV") {
//           // Stampa le caratteristiche dell'auto venduta in un elemento HTML
//           const elementoHTML = document.getElementById("caratteristicheAuto");
//           elementoHTML.innerHTML = `Auto comprata: ${autoVenduta.marca} ${autoVenduta.modello} (${autoVenduta.tipo})`;
//         } else {
//           alert("Puoi solo comprare auto di tipo SUV. Il resto delle auto non è disponibile per te.");
//         }
//       } else {
//         alert("Non puoi comprare un'auto senza essere registrato. Devi prima registrarti come cliente.");
//       }
//     }
  
//     // Funzione per registrare un cliente
//     registraCliente(nomeCliente) {
//       this.clientiRegistrati.push(nomeCliente);
//       console.log(`Cliente ${nomeCliente} registrato con successo.`);
//     }
//   }
  
//   // Creazione di un'istanza della classe "Concessionario"
//   const concessionario = new Concessionario();
  
//   // Creazione di alcune auto e aggiunta al parco auto
//   const auto1 = new Auto("Fiat", "Panda", "City car");
//   const auto2 = new Auto("Ford", "Focus", "Berlina");
//   const suv1 = new Auto("Jeep", "Renegade", "SUV");
//   const suv2 = new Auto("Toyota", "RAV4", "SUV");
  
//   concessionario.aggiungiAuto(auto1);
//   concessionario.aggiungiAuto(auto2);
//   concessionario.aggiungiAuto(suv1);
//   concessionario.aggiungiAuto(suv2);
  
//   // Esempio di utilizzo delle funzionalità del concessionario
//   concessionario.listaAuto(); // Visualizza la lista di auto disponibili nel parco auto
  
//   concessionario.vendita("Mario Rossi", 2); // Esempio di vendita di un'auto (cliente non registrato)
//   concessionario.registraCliente("Mario Rossi"); // Registrazione del cliente
  
//   concessionario.vendita("Mario Rossi", 2); // Esempio di vendita di un'auto (cliente registrato)

/*
concessionario
classe 
proprieta'
- parco auto (array di auto)
- clienti registrati (array di stringhe) 

funzionalita' 
- lista auto (console.log)
- vendita' 
 -> se il cliente e' registrato i suv sono disponibili
 -> stampa a in un elemento html le caratteristiche dell'auto comprata

 -> se non lo sei puoi solo comprare il resto (istanza di car e non di suv)
 -> comunicami con un alert che non posso comprare perche'mi devo prima registrare

 - registra cliente]-> chiedete il nome
 -> aggiungete alla lista dei clienti 

*/

class Car {
    constructor(brand, model, year, fuelLevel) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuelLevel = fuelLevel;
    }

    horn(){
        return "Medium car"
    }

    refuel(fuelAmount){
        if (fuelAmount === 100){
            return "No need to fill me up!"
        }
        if(( this.fuelLevel + fuelAmount ) > 100){
            return "You are overfueling me! Stop!"
        }
        this.fuelLevel+= fuelAmount
        return this.fuelLevel
    }
}

class Suv extends Car {
    horn() {
        console.log("Bigga than ya")
    }
}
class carPark {
    constructor(cars, customers) {
        this.cars = cars;
            this.customers = customers;
        }
        displayCars(){
            console.log(this.cars)
        }
    }


const cars = [
    new Car("Punto", "White", "Fiat", 24),
    new Car("XC40","Blue", "Volvo", 10),
    new Suv("Panda", "Green", "Fiat", 12),
    new Suv("X5", "Red", "BMW", 0)
];

const customers = ["Frodo Baggins", "Samwise Gamgee", "Meriadoc Brandibuc", "Peregrin Tuc"];

const amazingCarPark = new CarPark(cars, customers);
console.log(amazingCarPark)