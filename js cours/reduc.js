var facture = 500;
var reduc = 0;

if (facture >= 1000 && facture <= 2500) {
    reduc = 0.95;
}
else if (facture > 2500) {
    reduc = 0.9;
}
else {
    reduc = 1;
}
switch (reduc) {
    case 0.95:
        alert("vous bénéficiez d'une réduction de 5%");
    break;
    case 0.90:
        alert("vous bénéficiez d'une réduction de 10%");
    break;
    case 1:
        alert("vous ne bénéficiez d'aucune réduction");
    break;
}
alert("vous devez payez :" + facture * reduc +" €");