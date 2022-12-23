/* 
    Shifumi
        */
let joueur= prompt("Choississez: pierre, feuille ou ciseaux").toLowerCase();
// convertir en minuscule
let random= Math.floor(Math.random()*3);
let pc;
// On assigne les choix de l'ordi
switch (random) {
    case 0:
        // code
        pc="feuille";
        break;
    case 1:
        // code
        pc="pierre";
        break;
    case 2:
        // code
        pc="ciseaux";
        break;
}
// on force le joueur à choisir
while (joueur !== "pierre" && joueur !== "feuille" && joueur !== "ciseaux") {
    joueur= prompt("Veuillez choisir entre : pierre, feuille ou ciseaux");
    // convertir en miniscule 
}
console.log(random);
console.log(joueur);
console.log(pc);

// si y' une égalité 
if (joueur===pc) {
     document.write("Vous avez choisi: "+ joueur + ", l'ordinateur a choisi: "+ pc);
     alert("Egalité !");
}
// On joue
else {
    switch (joueur) {
    case "pierre":
        switch (pc) {
            case "feuille":
                document.write("Vous avez choisi: "+ joueur + ", l'ordinateur a choisi: "+ pc);
                alert("Vous avez perdu !");
            break;
            case "ciseaux":
                document.write("Vous avez choisi: "+ joueur + ", l'ordinateur a choisi: "+ pc);
                alert("Vous avez gagné !");
            break;
        }
    break;
    case "feuille":
        switch (pc) {
            case "ciseaux":
                document.write("Vous avez choisi: "+ joueur + ", l'ordinateur a choisi: "+ pc);
                alert("Vous avez perdu !");
            break;
            case "pierre":
                document.write("Vous avez choisi: "+ joueur + ", l'ordinateur a choisi: "+ pc);
                alert("Vous avez gagné !");
            break;
        }
    break;
    case "ciseaux":
        switch (pc) {
            case "feuille":
                document.write("Vous avez choisi: "+ joueur + ", l'ordinateur a choisi: "+ pc);
                alert("Vous avez gagné !");
            break;
            case "pierre":
                document.write("Vous avez choisi: "+ joueur + ", l'ordinateur a choisi: "+ pc);
                alert("Vous avez perdu !");
            break;
        }
    break;
    }
}