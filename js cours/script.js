var note = 20;
var noteAmericaine = "";

if(note > 19) {
    noteAmericaine = "A+";
} else if (note <= 19 && note >= 18) {
    noteAmericaine = "A";
} else if (note < 18 && note >= 15 ) {
    noteAmericaine = "B";
} else if (note < 15 && note >= 12) {
    noteAmericaine = "C";
} else if (note < 12 && note >= 9) {
    noteAmericaine = "D";
} else if (note < 9 && note >= 6) {
    noteAmericaine = "E";
} else {
    noteAmericaine = "F";
}


switch(noteAmericaine) {
    case "A+":
        alert("Travail correct");
    break;
    case "A":
        alert('Pas mauvais');
    break;
    case "B":
        alert('En bonne voie');
    break;
    case "C":
        alert('Ne pas se relacher');
    break;
    case "D":
        alert('Résultat médiocre');
    break;
    case "E":
        alert('Savez-vous lire ?');
    break;
    case "F":
        alert("Merci d'arrêter de troller");
    break;
    default:
        alert('peut mieux faire');
}