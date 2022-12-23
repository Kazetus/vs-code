"use strict";
let math = Array(25);
let eleve= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
console.log(math.length);
function rempli() {
    for(let i=0;i<math.length;i++) {
        math[i] = parseInt(prompt("veuillez saisir la note de l'élève :" + eleve[i]),10);
    }
    if (confirm("Voulez-vous poster les notes ?")) {
        affiche();
    }
    else {}
}
function affiche() {
    document.write("<p>Voici les notes des élèves :</p><ul>");
    for (let i=0;i<math.length;i++) {
        document.write("<li> élève:"+ eleve[i]+ " : " + math[i] + "</li>");
    }
    document.write("</ul>");
}
rempli();