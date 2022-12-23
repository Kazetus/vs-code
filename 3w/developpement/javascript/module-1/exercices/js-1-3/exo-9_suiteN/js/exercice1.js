"use strict";
let user;
let som=0;
let i=1;
function count() {
    do {
        user= parseInt(prompt("Veuillez saisir un nombre"), 10);
    }
    while(isNaN(user));
    document.write("somme =");
    do {
        document.write(i);
        som = som + i;
        document.write(" + ");
        i++;
        console.log(som);
    }
    while (i<=user);
    document.write(i);
    document.write("=" + som);
}
count();