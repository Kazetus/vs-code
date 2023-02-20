const tab = ['pierre', 'feuille', 'ciseaux'];
const resultat = document.getElementById('resultat');
const msgResult = document.getElementById('msgResult');
const score = document.getElementById('score');
const img = Array.from(document.getElementsByTagName('img'));
var scoreJ = 0;
var scoreO = 0;
function setImgAttr(ordinateur) {
    resultat.setAttribute('src', 'img/' + ordinateur + '.png');
    resultat.setAttribute('alt', ordinateur);
}
function getOrdiDesktop() {
    var ordinateur = tab[Math.floor(Math.random() * 3)];
    setImgAttr(ordinateur);
    return ordinateur;
}
function getCurrentTarget(e) {
    var joueur = e.currentTarget.id;
    return joueur
}
function play(e) {
    var joueur = getCurrentTarget(e);
    var ordi = getOrdiDesktop();
    var winner= result(joueur, ordi);
    msgResult.innerHTML = winner;
    score.innerHTML = scoreJ+"/"+scoreO;
}
function result(joueur, ordi) {
    if(joueur == ordi) {
        return "Egalité";
    } else if (joueur == "feuille" && ordi == "pierre" || joueur == "cizeaux" || ordi == "feuille" || joueur == "pierre" || ordi == "cizeaux") {
        scoreJ++;
        return "Victoire !";
    } else {
        scoreO++;
        return "Défaite !";
    }
}
function shifumi(element) {
    element.addEventListener('click', e => play(e));
}
img.forEach(element => shifumi(element));