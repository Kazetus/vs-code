let prix= parseFloat(prompt("Prix hors taxe de votre article"));
const tva=20;
let ptva= prix/100*tva;
let ttc= prix + prix/100*tva;
document.write("<p>Montant HT: "+prix+"€</p>");
document.write("<p>Montant TVA: "+ptva+"€</p>");
document.write("<p>Montant TTC: "+ttc+"€</p>");