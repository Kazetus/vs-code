# <div align="center">  Cours de JavaScript  </div>  
# <div align="center">  ![js](img/js.png) </div>
## Introduction au JavaScript  
**JavaScript** est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web. Une grande majorité des sites web l'utilisent, et la majorité des navigateurs web disposent d'un moteur JavaScript pour l'interpréter. 
## Qu’est-ce qu’une variable ?

Une variable est un conteneur servant à stocker des informations de manière temporaire, comme une chaine de caractères (un texte) ou un nombre par exemple.

Le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs au fil du temps et c’est cette particularité qui les rend si utiles.
## Les règles de déclaration des variables en JavaScript

Concernant le nom de nos variables, nous avons une grande liberté dans le nommage de celles-ci mais il y a quand même quelques règles à respecter :

* Le nom d’une variable doit obligatoirement commencer par une lettre ou un underscore (_) et ne doit pas commencer par un chiffre ;
* Le nom d’une variable ne doit contenir que des lettres, des chiffres et des underscores mais pas de caractères spéciaux ;
* Le nom d’une variable ne doit pas contenir d’espace.
* Le nom d'un variable ne doit pas être un mot réservé.

```
var maChaine = new String("exemple");
```
typeof maCHaine renverra un type object.

```
var a = 42; 
var b = 4.2;
var c = -42;
var d = "42":
alert( "Ma variable a est de type : " + typeof a + 
"\nma variable b est de type : " + typeof b + 
"\nma variable c est de type : " + typeof c + 
"\nma variable d est de type : " + typeof d);
```
![variable](img/varabcd.PNG)

```
var n = null;
var u ;
var nn = NaN;
alert( "Ma variable n est de type : " + typeof n + 
"\nma variable u est de type : " + typeof u + 
"\nma variable nn est de type : " + typeof nn );
```

![undefined](img/undefined.PNG)

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
## Opérateur mathématiques
| Opérateur | Définition |
|:-----------:|:------------|
| + | Permet d'additionner ou concaténer les valeurs |
| - | Permet de soustraire des valeurs|
| * | Permet de multiplier les valeurs |
| / | Permet également de diviser les valeurs |
| % | Renvoi le reste d'une division |
| ** | Permet de faire un calcul de puissance |
## Opérateur de comparaison
| Opérateur | Définition |
|:-----------:|:------------|
| == | Permet de tester l’égalité sur les valeurs |
| === | Permet de tester l’égalité en termes de valeurs et de types|
| != | Permet de tester la différence en valeurs |
| <> | Permet également de tester la différence en valeurs |
| !== | Permet de tester la différence en valeurs ou en types |
| < | Permet de tester si une valeur est strictement inférieure à une autre |
| > | Permet de tester si une valeur est strictement supérieure à une autre |
| <= | Permet de tester si une valeur est inférieure ou égale à une autre |
| >=  | Permet de tester si une valeur est supérieure ou égale à une autre |
## Opérateur logique
| Opérateur | Opérateur | Description |
|----------|---------|----------|
|AND |&&  | Lorsqu’il est utilisé avec des valeurs booléennes, renvoie true si toutes les comparaisons sont évaluées à true ou false sinon |
OR | \|\| | Lorsqu’il est utilisé avec des valeurs booléennes, renvoie true si au moins l’une des comparaisons est évaluée à true ou false sinon |
NO | ! | Renvoie false si une comparaison est évaluée à true ou renvoie true dans le cas contraire |

## Méthode d'utilisation de tableau
| Méthode | entrée | sortie | description |
|---------|--------|---------|------------|
| .push(x); | [1, 2, 3] | [1, 2, 3, x] | ajoute la valeur indiqué à la fin du tableau |
| .pop(); | [1, 2, 3] | [1, 2] | retire la dernière valeur |
| .shift(); | [1, 2, 3] | [2, 3] | retire la première valeur |
| .unshift(0); | [1, 2, 3] | [0, 1, 2, 3] | ajoute la valeur indiqué au début du tableau |
| .concat("d"); | [1, 2, 3] | [1, 2, 3] et [1, 2, 3, "d"] | fusionne des tableaux sans changer les valeurs du tableau initial |
| .join('-'); | ["a", "b", "c"] | a-b-c  | joindre les valeurs du tableau sans changer les valeurs du tableau initial |
| .slice(1); | ["a", "b", "c"] | ["b", "c"] | retire le nombre d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial |
| .slice(-1); | ["a", "b", "c"] | ["b", "c"] | retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial |
| .includes("c"); | ["a", "b", "c"] | true | true vérifie si la valeur existe |
| .indexOf("c"); | ["a", "b", "c"] | 2 | renvoi le position (index) de la valeur dans le tableau |
| .reduce((acc, cou)=> acc + cou ) | [1, 2, 3] | 6 | additionne tous les éléments du tableau |
| .findIndex(el => el > 2) | [1, 2, 3] | 2  | renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition |
| .map(el => el * 2); | [1, 2, 3] | [2, 4, 6] | crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant. |
| .some(el => el > 2); | [1, 2, 3] | true | passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test. |
| .filter(el => el > 1) | [1, 2, 3] |  [2,3]  | renvoi tous les éléments qui respectent la condition |
| .every(el => el > 1); | [1, 2, 3] | false | Vérifie si tous les éléments du tableau respecte la condition |
| .reverse(); | [1, 2, 3] | [3, 2, 1] | Renvoie le tableau en inversant les éléments internes |