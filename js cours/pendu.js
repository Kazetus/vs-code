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