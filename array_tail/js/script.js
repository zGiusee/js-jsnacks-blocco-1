// ESERCIZIO "LA CODA DELL'ARRAY"

// CREO L'ARRAY VUOTO
let array = [ ];

// CREO IL PROMPT CHE MI DIA IL VALORE CHE INSERISCE L'UTENTE
let elementi = parseInt(prompt("Indica quanti elementi vuoi che ci siamo nell'array"));

// CREO IL CICLO CHE RIPETERà L'AZIONE "X" VOLTE
for(let i = 0; i<elementi; i++){

    // CREO LA VARIABILE CHE ESTRAE 1 NUMERO CASUALE DA 1 A 100
    let rng = Math.floor(Math.random() * 100 + 1);

    // INVIO IL RISULTATO DELLA VARIABILE DENTRO L'ARRAY
    array.push(rng);

}

// BONUS CHIEDO ALL'UTENTE QUANTI VALORI DELL'ARRAY VORRA STAMPARE SULLA CONSOLE
let stampare = parseInt(prompt("Quanti elementi vorresti stampare?"));

// UTILIZZO SLICE PER DECIDERE QUANTI ELEMENTI STAMPARE
let elementi_stampati = array.slice(0,stampare);

// ESEGUO UN CONTROLLO PER VERIFICARE SE TUTTO SIA STATO ESEGUITO CORRETTAMENTE
console.log(elementi_stampati);

// UTILIZZO ANCORA SLICE PER STAMPARE GLI ULTIMI 5 VALORI DELL'ARRAY
let ultimi_elementi = array.slice(-5);

//CONTROLLO SE SONO VISUALIZZATI SOLO GLI ULTIMI 5 VALORI DELL'ARRAY
console.log(ultimi_elementi);


