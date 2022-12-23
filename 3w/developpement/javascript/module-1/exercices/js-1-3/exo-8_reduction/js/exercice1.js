"use strict";
let panier = [];
let prix;
let total = 0;
let reduc1 = 0.97;
let reduc2 = 0.95;
function addItemInCart() {
while (window.confirm("Vous voulez ajouter un article ?")){
    panier.push(parseInt(prompt("Tarif du produit"),10));
}
document.write("<p>Votre panier: </p><ul>");
for (let i=0;i<panier.length;i++) {
    prix = panier[i];
    console.log(prix);
    if (prix<350) {
    }
    else if (prix>600) {
        prix = prix * reduc2;
    }
    else {
        prix = prix * reduc1;
    }
    total = total + prix;
    console.log(total);
    document.write("<li>"+prix+"€</li>");
}
document.write("</ul><p>Le total de votre panier s'élève à : "+ total +"€");
}
addItemInCart();