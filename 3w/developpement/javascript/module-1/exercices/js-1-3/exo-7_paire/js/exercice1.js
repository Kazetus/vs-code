"use strict";
let user = parseInt(prompt("Veuillez saisir un nombre"), 10);

if (user%2 == 0){
    document.write("Le nombre est paire");
}
else {
    document.write("Le nombre est impaire");
}