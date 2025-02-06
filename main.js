

// Selfwork Oggetti 3
// Crea un oggetto bowling con le seguenti caratteristiche:
// una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
// diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
// determinare il vincitore

// EXTRA:
// Crea un metodo per stilare la classifica finale dei giocatori

// DATI DI PARTENZA:
// let bowling = {
//     'players': [
//         {'name': 'Livio', 'scores': []},
//         {'name': 'Paola', 'scores': []},
//         {'name': 'Filippo', 'scores': []},
//         {'name': 'Giuseppe', 'scores': []}
//     ],
//     ...
// }




let bowling = {
    
    'giocatori' : [
        [`Livio`, [], []],
        [`Paola`, [], []],
        [`Filippo`, [], []],
        [`Giuseppe`, [], []],
    ],
    
    // metodo per mostrare tutti i partecipanti
    'mostra_partecipanti' : function () {
        
        this.giocatori.forEach( (giocatori)=> console.log(giocatori) ); 
    },
    
    // metodo per contare i giocatori partecipanti
    'conta_giocatori' : function () {
        
        let partecipanti = this.giocatori.length;
        
        return partecipanti
        
    },
    
    // metodo per aggiungere un giocatore
    
    'aggiungi_giocatore' : function (nuovo_giocatore) {
        
        this.giocatori.push([nuovo_giocatore, [], []])
        
        
    },
    
    
    // metodo per simulare la partita
    
    'simula_partita' : function () {
        
        
        for (let i = 1; i <=10; i++) {
            let tiro = Math.floor(Math.random() * (10 - 1 +1) + 1);      
            this.giocatori[0][1].push(tiro); 
        }
        for (let i = 1; i <=10; i++) {
            let tiro = Math.floor(Math.random() * (10 - 1 +1) + 1);      
            this.giocatori[1][1].push(tiro); 
        }
        for (let i = 1; i <=10; i++) {
            let tiro = Math.floor(Math.random() * (10 - 1 +1) + 1);      
            this.giocatori[2][1].push(tiro); 
        }
        for (let i = 1; i <=10; i++) {
            let tiro = Math.floor(Math.random() * (10 - 1 +1) + 1);      
            this.giocatori[3][1].push(tiro); 
        }
        for (let i = 1; i <=10; i++) {
            let tiro = Math.floor(Math.random() * (10 - 1 +1) + 1);      
            this.giocatori[4][1].push(tiro); 
        }
        
    },
    
    
    // metodo per ordinare in ordine decrescente
    
    'ordine_punteggio' : function () {
        
        console.log( `Il Giocatore ${this.giocatori[0][0]} in 10 tiri ha totalizzato i punteggi (in ordine decr.) ${this.giocatori[0][1].sort(( a, b )=> b-a ) }. ` );
        console.log( `Il Giocatore ${this.giocatori[1][0]} in 10 tiri ha totalizzato i punteggi (in ordine decr.) ${this.giocatori[1][1].sort(( a, b )=> b-a ) }. ` );
        console.log( `Il Giocatore ${this.giocatori[2][0]} in 10 tiri ha totalizzato i punteggi (in ordine decr.) ${this.giocatori[2][1].sort(( a, b )=> b-a ) }. ` );
        console.log( `Il Giocatore ${this.giocatori[3][0]} in 10 tiri ha totalizzato i punteggi (in ordine decr.) ${this.giocatori[3][1].sort(( a, b )=> b-a ) }. ` );
        console.log( `Il Giocatore ${this.giocatori[4][0]} in 10 tiri ha totalizzato i punteggi (in ordine decr.) ${this.giocatori[4][1].sort(( a, b )=> b-a ) }. ` );
        
        
    },
    
    
    // metodo per sommare i punti
    
    'accumula_punteggi_finali' : function () {
        
        
        this.giocatori[0][2] = this.giocatori[0][1].reduce ( (acc, n) => acc + n );
        this.giocatori[1][2] = this.giocatori[1][1].reduce ( (acc, n) => acc + n );
        this.giocatori[2][2] = this.giocatori[2][1].reduce ( (acc, n) => acc + n );
        this.giocatori[3][2] = this.giocatori[3][1].reduce ( (acc, n) => acc + n );
        this.giocatori[4][2] = this.giocatori[4][1].reduce ( (acc, n) => acc + n );
        
        
        
    },
    
    
    // metodo per sommare i punti
    
    'somma_punti' : function () {
        console.log( `Il Giocatore ${this.giocatori[0][0]} in 10 tiri ha totalizzato un totale di ${this.giocatori[0][2]}. ` );
        console.log( `Il Giocatore ${this.giocatori[1][0]} in 10 tiri ha totalizzato un totale di ${this.giocatori[1][2]}. ` );
        console.log( `Il Giocatore ${this.giocatori[2][0]} in 10 tiri ha totalizzato un totale di ${this.giocatori[2][2]}. ` );
        console.log( `Il Giocatore ${this.giocatori[3][0]} in 10 tiri ha totalizzato un totale di ${this.giocatori[3][2]}. ` );
        console.log( `Il Giocatore ${this.giocatori[4][0]} in 10 tiri ha totalizzato un totale di ${this.giocatori[4][2]}. ` );
        
    },
    
    
    
    
    
    'classifica' : function () {
        
        
        let classifica = [ this.giocatori[0][2], this.giocatori[1][2], this.giocatori[2][2], this.giocatori[3][2], this.giocatori[4][2] ]
        
        classifica.sort( (a, b)=> b-a )
        
        
        console.log(classifica);
        
        
    }
    
    
    
}





bowling.conta_giocatori();

console.log(bowling.conta_giocatori());

bowling.aggiungi_giocatore(`David`);

bowling.aggiungi_giocatore(`Astrubale`)

bowling.simula_partita();



bowling.mostra_partecipanti();

bowling.ordine_punteggio();

bowling.accumula_punteggi_finali();

bowling.somma_punti();




bowling.classifica();








console.log(bowling);





