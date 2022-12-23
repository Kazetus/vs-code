/**
 * Déclarer une variable ayant pour type String.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */
let prenom = window.prompt(" Quel est votre prénom ?");
let nom= window.prompt(" Quel est votre nom de famille ?");
let userDay= parseInt(window.prompt("Quel est votre jour de naissance ?"), 10);
let userMonth= parseInt(window.prompt("Quel est votre mois de naissance (En chiffre)?"), 10);
let userYear = parseInt(window.prompt("En quelle année êtes-vous né ?"), 10);
let jourDiff;
let moisDiff;
let userAge;
const laDate=new Date();
const currentDay= laDate.getDate();
const currentMonth= laDate.getMonth()+1;
const currentYear= laDate.getFullYear();
jourDiff= currentDay - userDay;
moisDiff= currentMonth - userMonth;
userAge = currentYear - userYear;
if (jourDiff< "0" && moisDiff=="0") //Date du jour plus tôt dans le mois par raport à l'anniversaire.
{
       userAge= userAge-1;
}
else if (moisDiff<"0") // Mois en cours plus tôt dans l'année par rapport à l'anniversaire.
{
       userAge= userAge-1;    
}
else { //Reste du temps.
    
}
console.log(currentYear);
console.log(userYear);
console.log(jourDiff);
console.log(currentMonth);
console.log(userMonth);
console.log(moisDiff);
console.log(userAge);
alert ("Salut " + prenom + " " + nom + ", vous avez " + userAge + " ans !");
/*let jourDiff= today - userDey;
let moisDiff= currentMonth - userMonth;
let anneeDiff= currentYear -userYear;

If (jourDiff< "0" || moisDiff<"0") 
{
       annéeDiff= annéeDiff-1
}
else {
    
}*/ 
    
