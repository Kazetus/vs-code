// CONSTANTE PUIS VARIABLE
const score = document.getElementById('score');
const result = document.getElementById('result');
const btn = Array.from(document.querySelectorAll('button'));
const img = {feuille : `<i class="fa-solid fa-hand"></i>`, pierre : `<i class="fa-solid fa-hand-fist"></i>`, ciseaux : `<i class="fa-solid fa-hand-scissors"></i>`};
let pc = "";
let joueur = "";
let scorePc = 0;
let scoreJoueur = 0;
// FONCTIONS
function pcPlay(){
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return "pierre";
        break;
        case 1:
            return "feuille";
        break;
        default:
            return "ciseaux";
        break;
    }
}
function play() {
    joueur = this.getAttribute('id');
    pc = pcPlay();
    if(joueur == pc) {
        result.innerHTML += `<tr><th class="blue">${img[joueur]}</th><th class="blue">${img[pc]}</th><th class="blue">Egalité !</th></tr>`;
    } else if( joueur == "feuille" && pc =="pierre" || joueur == "pierre" && pc =="ciseaux" || joueur == "ciseaux" && pc == "feuille" ) {
        result.innerHTML += `<tr><th class="green">${img[joueur]}</th><th class="red">${img[pc]}</th><th class="green">Victoire !</th></tr>`;
        scoreJoueur++;
    }
    else {
        result.innerHTML += `<tr><th class="red">${img[joueur]}</th><th class="green">${img[pc]}</th><th class="red">Défaite !</th></tr>`;
        scorePc++;
    }
    score.innerHTML = `<th class="green">${scoreJoueur}</th><th class="red">${scorePc}</th>`
}
// CODE EXECUTE
document.addEventListener('DOMContentLoaded', function() {
    btn.map(el => el.addEventListener('click', play));
});