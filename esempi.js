let myArray = new Array(10);
//console.log(myArray);
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]); 
}
let myArray2 = new Array();
for(let i = 0; i < myArray2.length; i++){
    console.log(myArray2[i]); 
}
let myArray3 = new Array("gatto","cane","leone");
for(let i = 0; i < myArray3.length; i++){
    console.log(myArray3[i]);
    console.log(myArray3[i].charAt(0)); 
}
let myArray4 = [true,"Matteo","Lucia","Catanzaro",124];
for(let i = 0; i < myArray4.length; i++){
    console.log(myArray4[i]);
    //console.log(myArray4[i].charAt(0));  --> ERRORE
}
let myArray5 = new Array("a","b","c");
console.log(myArray5[0]); //a
console.log(myArray5[1]); //b
console.log(myArray5[2]); //c
console.log(myArray5[myArray5.length -1]); //c


let arrayEsempio = [10,21,1]; // length = 3
for(let indice = 0; indice < arrayEsempio.length; indice++){ //0... N-1
    let elemento = arrayEsempio[indice]; //arrayEsempio[0];arrayEsempio[1]; arrayEsempio[2],... 
    console.log(elemento); 
}
console.log(arrayEsempio.length);
// prima iterazione: indice = 0 --> arrayEsempio[0] = 10
// seconda iterazione: indice = 1 --> arrayEsempio[1] = 21
// terza iterazione: indice = 2 --> arrayEsempio[2] = 1

console.log("DOPO..");
arrayEsempio.push(31);
for(let i = 0; i < arrayEsempio.length; i++){
    console.log(arrayEsempio[i]);}
