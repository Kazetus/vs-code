"use strict";
let sum=0;
let nbr=0;
let module=0;
let total=0;
function nbrparfait(){
    do {
        nbr=parseInt(prompt("veuillez choisir un nombre"), 10);
    }
    while(isNaN(nbr));
    for (let i=1;i<nbr;i++){
        module= nbr % i;
        if (module === 0){
            console.log(i + "est diviseur");
            total=total+i;
        }
        else {
        }
    }
    if (total===nbr) {
        document.write("C'est un nombre parfait");
    }
    else {
        document.write("Ce n'est pas un nombre parfait");
    }
}
nbrparfait();