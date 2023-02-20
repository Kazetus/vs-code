var arrive = 09.00;
var depart = 17.00;
var actu = 8.00;

if (actu < 9) {
    alert("il est trop tôt, revenez plus tard");
}
else if (arrive <= actu && actu <= depart) {
    alert("Bienvenue");
    if (actu <= 12.50) {
        alert("Nous sommes le matin");
    }
    else {
        alert("Nous sommes l'après-midi");
    }
}
else {
    alert("revenez demain");
}

var arrayNbr = [1, 2, 3];
var arrayStr = ['a', 'b', 'c'];

arrayNbr.push(4); //[1, 2, 3, 4] ajoute la valeur indiqué à la fin du tableau
arrayNbr.pop(); //[1, 2] retire la dernière valeur
arrayNbr.shift(); //[2, 3] retire la première valeur
arrayNbr.unshift(0); //[0, 1, 2, 3] ajoute la valeur indiqué au début du tableau
arrayStr.concat("d"); //fusionne des tableaux sans changer les valeurs du tableau initial
arrayStr.join('-'); // a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial
arrayStr.slice(1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial
arrayStr.slice(-1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial
arrayStr.includes("c"); //true vérifie si la valeur existe
arrayStr.indexOf("c"); //2 renvoi le position (index) de la valeur dans le tableau
arrayNbr.reduce((acc, cou)=> acc + cou ) //6 additionne tous les éléments du tableau
arrayNbr.findIndex(el => el > 2) //2 renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition
arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
 arrayNbr.some(el => el > 2); //true passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
 arrayNbr.filter(el => el > 1) // [2,3] renvoi tous les éléments qui respectent la condition
 arrayNbr.every(el => el > 1);
 arrayNbr.reverse();