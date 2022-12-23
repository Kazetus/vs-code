"use strict";
let tableau = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let prime;
let modulo;
for (let i=0;i<tableau.length;i++) {
    if (tableau[i]<2) {
    }
    else {
        prime = true;
        let j=2;
        while (j<tableau[i] && prime) {
            modulo = tableau[i] % j;
            if (modulo === 0) {
                if(j===tableau[i]) {
                    console.log(j);
                }
                else {
                    console.log(j+"false");
                prime=false;
                }
            }
            else{
                j++;
            }
        }
        if ( prime === true) {
            document.write("<p>"+tableau[i]+" est un nombre premier. </p>");
        }
        else{
            document.write("<p>"+tableau[i]+" n'est pas un nombre premier. </p>");
        }
    }
}
