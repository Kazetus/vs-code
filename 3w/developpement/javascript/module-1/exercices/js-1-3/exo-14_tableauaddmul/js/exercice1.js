"use strict";
let suite= [10,52,83,24,35,46,7,68,90,140,1,12,17,16,8,25,34,38,5,40];
let resultadd = 0;
let resultmult = 1;
let envoie1= document.getElementById("resultata");
let envoie2= document.getElementById("resultatm");
let text1= "L'addition du tableau donne: ";
let text2= "La multiplication du tableau donne: ";
function add() {
        for (let i=0;i<suite.length;i++) {
            resultadd = resultadd + suite[i];
            console.log(resultadd);
        }
        envoie1.textContent=text1 + resultadd;
        console.log(resultadd);
        resultadd= 0;
}

function multi() {
        for (let i=0;i<suite.length;i++) {
            resultmult = resultmult * suite[i];
            console.log(resultmult);
        }
        envoie2.textContent = text2 + resultmult;
        console.log(resultmult);
        resultmult = 1;
}
let btn = document.getElementById("ajouter");
let btnx = document.getElementById("multiplier");

btn.addEventListener("click",add);
btnx.addEventListener("click",multi);