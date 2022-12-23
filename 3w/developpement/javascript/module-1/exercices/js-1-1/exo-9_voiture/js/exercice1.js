let voiture={
    marque:"Opel",
    fabrication:"2011",
    achat:"15/11/2012",
    passager1 : "Matthias",
    passager2 : "Sandrine"
};
document.write("<h1> OBJET VOITURE </h1>");
document.write("<p>Informations sur la voiture :</p>");
document.write("<ul>");
for (const property in voiture) {
  document.write(`<li>${property}: ${voiture[property]}</li>`);
}
document.write("</ul>");