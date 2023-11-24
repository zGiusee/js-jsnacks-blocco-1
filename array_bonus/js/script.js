// BONUS

// CREO I 2 ARRAY CON QUANTITAà DI ELEMENTI DIVERSI
let array1 = [1, 2, 3, 6];
let array2 = [1,];

// CREO LA DIVISIONE DELLE DUE LUNGHEZZE
let lunghezza = array1.length - array2.length;

// FACCIO LA VARIABILE CHE CONFRONTI LE DUE LUNGHEZZE
if(array1.length > array2.length){

    // QUINDI SE ARRAY 1 è MAGGIORE DI ARRAY 2 CREO UN CICLO CHE AGGIUNGA UN NUMERO
    // RANDOMICO FINO A QUANDO ENTRAMBE LE LUNGHEZZE NON SARANNO UGUALI
    for(let i = 0; i<lunghezza; i++){
        let rng = Math.floor(Math.random() * 100 + 1 );
        array2.push(rng)
    }
}

// CONTROLLO CHE TUTTO SIA STATO EFFETTUATO CORRETTAMENTE
console.log(array1)
console.log(array2)