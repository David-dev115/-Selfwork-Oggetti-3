

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
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    
    // metodo per mostrare tutti i partecipanti
    'mostra_partecipanti' : function () {
        
        this.players.forEach( (giocatori)=> console.log(giocatori) ); 
    },
    
    // metodo per aggiungere un giocatore
    
    
    
    // metodo per simulare partita
    
    'simula_partita' : function () {
        
        this.players.forEach( (giocatore) => {
            
            for (let i = 1; i <= 10; i++) {
                giocatore.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1))
            }
            // console.log(giocatore.scores);
            
            
            
        }  )
        
    },
    
    // metodo per aggiungere giocatore
    
    'aggiungi_giocatore' : function (nuovo_giocatore) {
        
        let newPlayer = {'name': nuovo_giocatore, 'scores': []};
        for ( let index = 1; index <= 10; index++) {
            newPlayer.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1))
        }
        this.players.push(newPlayer)
        // console.log(newPlayer.scores);
        
    },
    
    
    // metodo per calcolare il punteggio finale
    
    'punteggio_finale': function() {
        
        this.players.forEach( (giocatore)=> {
            let tot = giocatore.scores.reduce( (acc, num ) => acc + num  )
            
            giocatore.totale = tot;
        })
        
        this.players.sort( (a, b)=> b.totale - a.totale  )
        
    },
    
    
    // metodo per decretare vincitore
    'vincitore' : function () {
        let vincitore = this.players[0];
        console.log(`Il vincitore è ${vincitore.name} con ${vincitore.totale}`);
        
    },
    
    
    // metodo per stilare classifica
    'classifica' : function () {
        console.log(`Classifica finale`);
        this.players.forEach(  giocatore=> {
            console.log(`${giocatore.name} con ${giocatore.totale} punti`);
            
        } )
        
    }
    
    
    
}




bowling.simula_partita();

bowling.aggiungi_giocatore(`Luigi`);

bowling.aggiungi_giocatore(`Carlo`);

bowling.punteggio_finale();

bowling.vincitore();

bowling.classifica();









bowling.mostra_partecipanti();
console.log(bowling);





