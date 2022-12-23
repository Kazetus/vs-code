/**
 * Calculawrite ⋅ ÷ 
 */
let nbr1=parseInt(window.prompt("Entrez un nombre"), 10);
while (isNaN(nbr1)) {
    nbr1=parseInt(window.prompt("Veuillez entrer un nombre"), 10);
} 
let action=window.prompt("Entrez un opérateur: + , - , *, x, ⋅,÷ , /");
while (action !== "+" && action !== "-" && action !== "*" && action !== "x" && action !== "⋅" && action !== "÷" && action !== "/") {
    action=window.prompt("Veuillez entrez un opérateur: + , - , *, x, ⋅,÷ , /");
}
let nbr2=parseInt(window.prompt("Entrez un autre nombre"),10);
while (isNaN(nbr2)) {
    nbr2=parseInt(window.prompt("Veuillez entrer un nombre"), 10);
}
var result;
switch (action) {
    case "+":
        // code
        result=nbr1+nbr2;
        break;
    case '-':
        // code
        result=nbr1-nbr2;
        break;
    case '*':
    case 'x':
    case '⋅':
        // code
        result=nbr1*nbr2;
        break;
    case '/':
    case '÷':
        if (nbr2===0) {
            result="Vous ne pouvez pas diviser par zéro.";
        }
        else {
            result=nbr1/nbr2;            
        }
        // code
        break;
    default:
        // code
        result="<p>Erreur: Vous n'avez pas saisi un opérateur.</p>";   
}
console.log(nbr1+action+nbr2);
document.write("<p>"+nbr1+action+nbr2+"</p>");
console.log(result);
document.write(result);
