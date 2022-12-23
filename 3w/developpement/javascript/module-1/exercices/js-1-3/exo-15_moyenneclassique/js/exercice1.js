"use strict";
let classes = {
};
let ligne1;
let eleve;
let nombreeleve;
let notes = [];
let ajout;
let formulaire;
let btn;
let btnclasse;
let inputname;
let inputnote;
let recupnom;
let recupnote;
let moyenne = 0;
// Faire une classe invisible pour désafficher les éléments.
function calcMoyenne() {
    notes = Object.values(classes);
    for(let i=0;i<nombreeleve;i++){
        moyenne += notes[i];
    }
    console.log(moyenne);
    moyenne /= nombreeleve;
    addInTable();
}
function addInTable() {
    ligne1.classList.remove("disabled");
    ajout.classList.add("disabled");
    eleve = Object.keys(classes);
    notes = Object.values(classes);
    ligne1.innerHTML = "<tr><td>Eleve</td><td>Notes</td></tr>";
    ligne1.innerHTML = "<tr><td>Moyenne</td><td>"+moyenne+"</td></tr>";
    for (let i=0;i<eleve.length;i++) {
        if(notes[i]>=moyenne) {
        ligne1.innerHTML += "<tr><td>" + eleve[i]+ "</td><td>"+notes[i]+"</td></tr>";
        }
        else {
            
        }
        console.log(notes);
    }
}
function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    for (let i=1;i<=nombreeleve;i++) {
        recupnom = "nom"+i;
        recupnote = "score"+i;
        console.log(recupnom);
        console.log(recupnote);
        inputname = document.getElementById(recupnom).value.toString();
        inputnote = parseInt(document.getElementById(recupnote).value, 10);
        console.log(inputname);
        console.log(inputnote);
        Object.defineProperty(classes, inputname, {
            value: inputnote,
            enumerable: true
        });
    }
    eleve = Object.keys(classes);
    notes = Object.values(classes);
    console.log(classes);
    calcMoyenne();
}
function addInput() {
    nombreeleve = parseInt(document.getElementById("nombreleve").value,10);  
    formulaire.classList.add("disabled");
    ajout.classList.remove("disabled");
    console.log(nombreeleve);
    if (isNaN(nombreeleve)) {
        document.location.reload();
    }
    else if (nombreeleve<=0) {
        document.location.reload();
    }
    else{}
    for (let i=1;i<=nombreeleve;i++) {
        ajout.innerHTML+=("<div class=\"block\"><label for=\"nom"+i+"\">Nom de l\'élève</label><input type=\"text\" id=\"nom"+i+"\" name=\"nom"+i+"\" required/><label for=\"score"+i+"\">Note</label><input type=\"number\" id=\"score"+i+"\" name=\"nom"+i+"\" required/></div>");
    }
    ajout.innerHTML+=("<button id=\"envoie\" class=\"block\" type=\"button\">Ajouter la classe</button>");
    btn = document.getElementById("envoie");
    btn.addEventListener("click", getValue);
}
document.addEventListener("DOMContentLoaded", function(){
    ligne1 = document.getElementById("tableau");
    formulaire = document.getElementById("form");
    ajout = document.getElementById("ajoutclasse");
    btnclasse = document.getElementById("addclasse");
    
    btnclasse.addEventListener("click",addInput);
});