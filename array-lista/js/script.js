// ESERCIZIO "TUTTI I FRUTTI"

// CREO L'ARRAY CHE CONTIENE I FRUTTI
let frigo = ["mela","pera","ciliegia","arancia","mandarino","cocomero","limone","fragola"];
console.log(frigo);

// METTO LA PESCA CHE è SUL "TAVOLO" NEL "FRIGO"

let pesca = "pesca";
frigo.push(pesca)

// CONTROLLO SE LA PESCA è STATA AGGIUNTA CORRETTAMENTE
console.log(frigo);

// CREO LA FLAG
let check = false;

// CREO L'ALGORIMTO PER CERCARE IL COCOMERO
for(let i = 0; i<frigo.length; i++){

    if(frigo[i] === "cocomero"){
        check = true;
    }

}

// CONTROLLO SE IL COCOMERO è PRESENTE O NO E STAMPO IL MESSAGIO

if(check){
    console.log("Trovato! Devo solo preparare il cocktail.")
}
else{
    console.log("Oh no, devo uscire a comprare il cocomero!")
}
