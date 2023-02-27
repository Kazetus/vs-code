/* 
    Shifumi
        */

// On assigne les choix de l'ordi
let pierre = document.getElementById('pierre');
let feuille = document.getElementById('feuille');
let cizeaux = document.getElementById('ciseaux');
let text = document.getElementById('result');
function computerPlay() {
    let random= Math.floor(Math.random()*3);
    switch (random) {
        case 0:
            // code
            return "feuille";
        case 1:
            // code
            return "pierre";
        case 2:
            // code
            return "ciseaux";
    }
}
function playerPlay() {
    let joueur = this.id;
    let pc = computerPlay();
    let result = "";
    // si y' une égalité 
    if (joueur===pc) {
        result = "<span class='blue'>Egalité</span></p> ";
    }
    // On joue
    else {
        switch (joueur) {
        case "pierre":
            switch (pc) {
                case "feuille":
                    result = "<span class='green'>Victoire !</span></p> ";
                break;
                case "ciseaux":
                    result = "<span class='red'>Défaite !</span></p> ";
                break;
            }
        break;
        case "feuille":
            switch (pc) {
                case "ciseaux":
                    result = "<span class='green'>Victoire !</span></p> ";
                break;
                case "pierre":
                    result = "<span class='red'>Défaite !</span></p> ";
                break;
            }
        break;
        case "ciseaux":
            switch (pc) {
                case "feuille":
                    result = "<span class='green'>Victoire !</span></p> ";
                break;
                case "pierre":
                    result = "<span class='red'>Défaite !</span></p> ";
                break;
            }
        break;
        }
    }
    text.innerHTML += "<p>Vous avez choisi: "+ joueur + ", l'ordinateur a choisi: "+ pc + ". " + result;
}

document.addEventListener('DOMContentLoaded', function(){
    pierre.addEventListener('click', playerPlay);
    feuille.addEventListener('click', playerPlay);
    cizeaux.addEventListener('click', playerPlay);
});