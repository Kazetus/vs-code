"use strict";
let liste = ["basilic","chips","biscuit"];

function ajouter(){
    while(window.confirm("Vous voulez ajouter autre chose ?")) {
    liste.push(prompt("Ajouter un objet à la liste de course").toLowerCase());
    }
}

function retirer(){
    while(window.confirm("Vous voulez retirer quelque chose ?")) 
    {
        let supprimer = liste.indexOf(prompt("retirer un objet à la liste de course").toLowerCase());
        console.log(supprimer);
        if (supprimer<0) {// -1 si l'indice n'existe pas 
        }
        else {
            document.write("<p>vous avez supprimer " + liste[supprimer]+"</p>");
            liste.splice(supprimer, 1);
        }
    }
}

function vider(){
    let vider = window.confirm("Voulez-vous vider la liste ?");
    if (vider === true) {
        liste.splice(0,liste.length);
    }
    else {}
}

function afficher(){
    document.write("<p>liste de course avec "+liste.length+" produits:</p><ul>");
    for(let i=0;i<liste.length;i++) {
        document.write("<li>"+liste[i]+"</li>");
    }
    console.log(liste);
    document.write("</ul>");
}

ajouter();
afficher();
retirer();
afficher();
vider();
afficher();