"use strict";
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let circle = {
    color: "#8A2BE2",
    length:20,
    x:10,
    y:10,
    radius:10
};
let canvas;
let context;
let nomTouche;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function keyBoard() {
    event.preventDefault();
    nomTouche = event.key;
    moveCircle();
}
function moveCircle() {
    switch (nomTouche) {
    case'ArrowRight':
        if (circle.x===canvas.width-10) {
            circle.x = 10;
        }
        else {
            circle.x+=10;
      }
    break;
    case"ArrowLeft":
        if (circle.x===10) {
            circle.x = canvas.width-10;
        }
        else {
            circle.x-=10;
        }
    break;
    case"ArrowUp":
        if (circle.y===10) {
            circle.y = canvas.height-10;
        }
        else {
            circle.y-=10;
        }
    break;
    case"ArrowDown":
        if (circle.y===canvas.height-10) {
            circle.y = 10;
        }
        else {
            circle.y+=10;
        }
    break;
    default: 
    }
    context.clearRect(0,0,800,600);
    drawCircle();
}

function drawCircle() {
    context.beginPath();
    context.fillStyle = circle.color;
    context.strokeStyle = circle.color;
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    canvas = document.getElementById("drawing");
    context = canvas.getContext("2d");
    drawCircle();
    
    document.addEventListener('keydown', keyBoard);    
});