// addList = function(){
// // creiamo un insieme di elementi per creare una lista
// // ul li li li
// let ul = document.createElement('ul');
// let li1 = document.createElement('li1');
// let li2 = document.createElement('li2');
// let li3 = document.createElement('li3');
// // abbiamo solo creato elementi senza nessuna connessione tra loro, non sono neanche presenti nel documento HTML

// // diamo prima un nome agli elementi 
// li1.textContent = "PRIMO ELEMENTO";
// li2.textContent = "SECONDO ELEMENTO";
// li3.textContent = "TERZO ELEMENTO";

// // per inserirli 
// // creiamo struttura elemento
// ul.append(li1,li2,li3);

// // ultimo passaggio per inserirli
// document.getElementById('list').append(ul);

// //prendo elemento list e lo stampo
// let list = document.getElementById('list')
// list.classList.forEach(el =>
//     console.log(el)
//     )

//     list.classList.add("esempioAdd")
//     let listChildren = list.childNodes;
//     console.log(listChildren)
//     // per aggiungere classe 
//     listChildren[0].classList.add('prova'); // aggiungo classe prova ad ul
// }

// addList()
// addList = function(){

//     /**CREO LA PRIMA LISTA */
//     // creo ul e li
//     let ul = document.createElement('ul');
//     let li1 = document.createElement('li');
//     let li2 = document.createElement('li');
//     let li3 = document.createElement('li');
//     // inserisco nomi
//     li1.textContent = "PRIMO ELEMENTO";
//     li2.textContent = "SECONDO ELEMENTO";
//     li3.textContent = "TERZO ELEMENTO";
//     // creiamo struttura elemento
//     ul.append(li1,li2,li3);
//     //inseriamo struttura all'interno del nostro tag con id "list"
//     //document.getElementById("list").append(ul);
    
//     /**CREO LA SECONDA LISTA */

//     let ul2 = document.createElement('ul');
//     let li12 = document.createElement('li');
//     let li22 = document.createElement('li');
//     let li32 = document.createElement('li');
//     // inserisco nomi
//     li12.textContent = "CIAO";
//     li22.textContent = "MONDO";
//     li32.textContent = "SOLE";
    
//     ul2.append(li12,li22,li32); 
//     document.getElementById("list").append(ul, ul2);
// /*
//     let list = document.getElementById("list");
//     list.classList.forEach( el =>
//         console.log(el)
//     )
//     list.classList.add("esempioAdd");*/

//     let listChildren = list.childNodes;
//     //array = [3,4];
//     //array[0] ; array[1]

//     console.log(listChildren); 
//     listChildren[0].classList.add("prova"); // aggiungo la classe prova a ul 
//     listChildren[1].classList.add("test"); // aggiungo la classe prova a ul
// }

// addDiv = function(){
//     let div = document.createElement('div');
//     let p = document.createElement('p')
//     //abbiamo creato due elementi
//     p.textContent = "Testo prova";
//     //creato del contenuto
//     div.appendChild(p) // appendiamo p a div 
//     // appendchild puo appendere solo un figlio
//     document.getElementById("testID").appendChild(div)
// }

// addList()
// addDiv()

// GLI EVENTI ################################################################################################################################################################

// window.onload = function() {
    
//     document.getElementById("testo").onclick = function() {
//         console.log("test");
//     }
//     document.getElementById("onMouseEvent").onMouseEvent = function(){
//         console.log("Sono su elemento")        
//     }
//     document.getElementById("onMouseEvent").onmouseout = function(){
//         console.log("sono uscito")
//     }
//     document.getElementById("mySelect")
// }

// loadElement = function(){
//     let ele = document.getElementsById("testo");
//     console.log(ele)
// }

// window.onload = function(){
//     //let ele = document.getElementById("testo");
//     //console.log(ele); 

//     document.getElementById("testo").onclick = function(){
//         console.log("test");
//         //alert("Benvenuto");
//     }
//     document.getElementById("onMouseEvent").onmouseover = function(){
//         //alert("SONO SUL ELEM");
//         console.log("sono su elemt");
//     }
//     document.getElementById("onMouseEvent").onmouseout = function(){
//         console.log("sono uscito");
//     }
//     document.getElementById("testoKey").onkeypress = function(){
//         console.log(this.value);
//     } 
//     document.getElementById("effettoBlur").onblur = function(){
//         console.log("ok")
//     }
//     document.getElementById("effettoBlur").onfocus = function(){
//         console.log("sono dentro")
//     }
//     document.getElementById("testo").onclick = function() {
//         let ele = document.getElementById("testo");
//         // ele.innerHTML = "<h2>TEST 2</h2>"
//         ele.style.color = "red"
//         ele.style.fontSize = "30px"
//     }
// }
// selezionaAuto = function(){
//     let valore = document.getElementById("mySelect").value;
//     console.log(valore);
// }



//Dato il seguente array [3,1,40,12,42,100,431,76,4,9]. 
// Creare dei bottoni che al click scatenano un evento.
//Il primo bottone mostra un messaggio con la somma.
//Il secondo colora di blu il numero maggiore.
//Il terzo colora di rosso il numero più piccolo.
//Il quarto sceglie un numero casuale e lo triplica.
//Il quindi bottone mostra un messaggio con la somma tutti i numeri pari.

let vettore = [3,1,40,12,42,100,431,76,4,9];
document.getElementById("array").append(vettore);

document.getElementById("somma").onclick = function(){
    let somma = vettore.reduce((prec,succ)=>prec+succ)
    alert(somma)
}

document.getElementById("blu").onclick = function(){
    let maggiore = 0
    for(i=0; i<vettore.length; i++){
        if(vettore[i]>maggiore){
            maggiore = vettore[i]
        }
    }
    let max = document.getElementById("max")
    max.innerHTML = maggiore;
    max.style.color = "blue";
}

document.getElementById("triplo").onclick = function(){
    let random = Math.random(...vettore)
    console.log(random)
}

//Il terzo colora di rosso il numero più piccolo.
document.getElementById("rosso").onclick = function(){
    let minore = vettore[0]
    for(i=0; i<vettore.length; i++){
        if(vettore[i]<minore){
            minore = vettore[i]
        }
    }
    let min = document.getElementById("min")
    min.innerHTML = minore;
    min.style.color = "red";
}

//Il quindi bottone mostra un messaggio con la somma tutti i numeri pari.
document.getElementById("sommaPari").onclick = function(){
    let pari = vettore.filter(pippo => pippo % 2 == 0)
    let sommaPari = pari.reduce((prec,succ)=>prec+succ)
    console.log(sommaPari)
}