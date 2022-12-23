"use strict";
let user;
let result;
const DIV = 3;
function multiple(){
    do {
        user = parseInt(prompt("Veuillez saisir un nombre."), 10);
    }
    while(isNaN(user));
    document.write("<p> Voyons, tout les multiples de 3 jusqu'à: " + user + "</p><ul>");
    for (let i=1;i<=user;i++) {
        result = i % DIV;
        if (result === 0) {
            document.write("<li>" + i + " est un multiple de 3.</li>");
        }
        else {
        }
    }
    document.write("</ul>");
}
multiple();