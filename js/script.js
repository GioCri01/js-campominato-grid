/*
**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
**Consigli del giorno:** :party_wizard:
**** Creiamo prima una griglia unica (es con 100 quadratini) per  poi dinamicizzare il dato con classi css dedicate
**** Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
*/


const container = document.querySelector(".my_container");
document.getElementById("play").addEventListener("click",stampaDom());



















//FUNCTION

//function square:

function creaSquare(target) {
    const quadrato = document.createElement("div");
    quadrato.className = "square" ;
    quadrato.innerHTML = `<span>${numeriRandom(1,100)}</span>`
    target.append(quadrato);
    return quadrato;
    
       
}

//function numeri random
function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function ciclo per stamapare gli square nel DOM

function stampaDom(params) {

    for (let i = 0; i < 100; i++) {
        const quadrato = creaSquare(container);
        quadrato.addEventListener("click", function(){
            this.classList.add("active")
        })

        
        
    }
    
}