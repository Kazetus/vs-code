"use strict";
// Déclaration des variables
let bouton;
let divs;
// Déclaration des fonctions
function toggleRectangle() {
    console.log(divs);
    divs.classList.toggle("rectangle");
}
function rectangleRed() {
    console.log(divs);
    divs.classList.toggle("important");
}
function rectangleVert() {
    console.log(divs);
    divs.classList.toggle("good");
}
function removeRectangleColor() {
    divs.classList.remove("good");
    divs.classList.remove("important");
}
// Mise en place des événements
bouton = document.getElementById("toggle-rectangle");
divs = document.querySelector(".rectangle");

bouton.addEventListener("click", toggleRectangle);
divs.addEventListener("mouseover", rectangleRed);
divs.addEventListener("dblclick", rectangleVert);
divs.addEventListener("mouseout", removeRectangleColor);