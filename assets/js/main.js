// Il computer deve generare 16 numeri casuali: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

var conta = 0
var ArrayBombs = []



function startbox(){
    let containerHtml = document.querySelector(".container");
    document.getElementById("main-color").style.backgroundColor="aquamarine";
    
    for( let x = 1; x <= 100; x++){

        // Creare una variabile locale contentente il numero randomico

        // Verificare se si è riaggiunto il numero di bombe necessarie
        // Nel caso in cui dobbiamo ancora aggiungere numeri verifichiamo che il numero che dobbiamo aggiungere non esista gia nell'array e lo aggiungiamo

        let RandomNumber = Math.floor( ( Math.random() * 100 ) +1);

        if (ArrayBombs.length < 16){
            if( !( ArrayBombs.includes(RandomNumber) ) ){
                ArrayBombs.push(RandomNumber)
            }     
            console.log(ArrayBombs)

        }


        //


        let createDiv = document.createElement('div');
    
            createDiv.className = 'box'
            createDiv.setAttribute("id", `${x}`)
            createDiv.setAttribute("onclick", `game(${x});`)
            containerHtml.append( createDiv )
            createDiv.innerHTML = x;
    
        }

}

// l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti.

function game(x){
    console.log(ArrayBombs)
    if( ArrayBombs.includes(x)){
        document.getElementById(x).style.backgroundColor="#ff5349";
        document.getElementById(x).innerHTML = '<i class="fa-solid fa-bomb" style="color: #831100;"></i>'

        
        //funzione per terminare il click per le bombe
        document.addEventListener("click", handler, true);
        
        function handler(e) {
            e.stopPropagation();
            e.preventDefault();
        }
        
        alert(`Hai perso! Il tuo punteggio è ${conta}`)
    
    } else{
        document.getElementById(x).style.backgroundColor="#8593c6";

        conta++;
    }

    if( conta == 84 ){
        alert(`Hai vinto! Il tuo punteggio è ${conta}`)

        document.addEventListener("click", handler, true);

        function handler(e) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

}









