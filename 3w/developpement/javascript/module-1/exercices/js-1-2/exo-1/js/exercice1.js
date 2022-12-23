/**
 * Créer ici le projet «Calculaprompt».
 */
let nbr1=parseInt(window.prompt("Entrez un nombre"), 10);
let action=window.prompt("Entrez un opérateur: + , - , *, /");
let nbr2=parseInt(window.prompt("Entrez un autre nombre"),10);
var result;
console.log(nbr1+action+nbr2);
document.write("<p>"+nbr1+action+nbr2+"</p>");
if (isNaN(nbr1) || isNaN(nbr2)) {
    console.error ("Vous n'avez pas saisi un nombre.");
    result="<p>Erreur: Vous n'avez pas saisi un nombre.</p>";
}
else {
switch (action) {
    case '+':
        // code
        result=nbr1+nbr2;
        break;
    case '-':
        // code
        result=nbr1-nbr2;
        break;
    case '*':
        // code
        result=nbr1*nbr2;
        break;
    case '/':
        // code
        if(nbr2===0) {
            result="Vous ne pouvez pas diviser par zéro.";
        }
        else {
        result=nbr1/nbr2;
        }
        break;
    default:
        // code
    console.error ("Vous n'avez pas saisi un opérateur");
    result="<p>Erreur: Vous n'avez pas saisi un opérateur.</p>";
}
}
console.log(result);
document.write(result);
