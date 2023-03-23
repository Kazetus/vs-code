console.log(new Date().toLocaleDateString('fr-FR'));

// Tableau associatif sans objet
var monTableau =[];
monTableau['enfant'] = "toto";
monTableau['maman'] = "tati";
monTableau['papa'] = "tutu";

// tableau associatif avec objet
var monTableau2 = { enfant : "toto", maman : "tati", papa : "tutu"};

// tableau indexé
var monTableau3 = ["toto", "tati", "tati"];

console.table(monTableau);
console.table(monTableau2);
console.table(monTableau3);

var a = 42; 
var b = 4.2; 
var c = -42; 
var d = "42";
alert( "Ma variable a est de type : " + typeof a + 
"\nma variable b est de type : " + typeof b + 
"\nma variable c est de type : " + typeof c + 
"\nma variable d est de type : " + typeof d +
"\nma variable monTableau est de type : " + typeof monTableau + 
"\nma variable monTableau2 est de type : " + typeof monTableau2 + 
"\nma variable monTableau3 est de type : " + typeof monTableau3 );

var n = null;
var u ;
var nn = NaN;
alert( "Ma variable n est de type : " + typeof n + 
"\nma variable u est de type : " + typeof u + 
"\nma variable nn est de type : " + typeof nn );

var x = 32;
var y = 5;
var z = 2;
alert(y)
y += z //équivaut y = y + z
alert(y) //renvoi 7
y *= z //équivaut y = y * z
alert(y) //renvoi 14
y -= z //équivaut y = y - z
alert(y) //renvoi 12
y /= z //équivaut y = y / z
alert(y) //renvoi 6
y %= z //équivaut y = y % z
alert(y) //renvoi 0





// On veut la somme des deux dernières entrées du tableau.
let monArray = [0,1,2,3]
let somme = monArray[2] + monArray[3];
console.log(somme);

// Faire une suite de Fibonacci sur un tableau jusqu'à ce que la 
// dernière valeur soit la plus proche de 50 sans dépasser 50.


let fibo = [0,1,1]

// while((fibo[fibo.length-1] + fibo[fibo.length-2]) < 50) {
//     fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2])
// }

for(let i = 2; (fibo[i] + fibo[i - 1]) < 50; i++) {
        fibo.push(fibo[i] + fibo[i - 1])
}
console.log(fibo);