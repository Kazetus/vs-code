/**
 * Déclarer une variable ayant pour type String.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */
let semaine= ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
let mois= ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
let date= new Date();
let jour= semaine[date.getDay()];
console.log(jour);
let datej= date.getDate();
let datem= mois[date.getMonth()];
let year= date.getFullYear();
document.write("<h1> Nous sommes le "+jour+" "+datej+" "+datem+" "+year+".");