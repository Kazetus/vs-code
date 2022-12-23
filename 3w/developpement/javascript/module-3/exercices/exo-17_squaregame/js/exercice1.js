"use strict";
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let square = {
    color: "#8A2BE2",
    length:20,
    x:10,
    y:10
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
    moveSquare();
}
function moveSquare() {
    if (nomTouche === 'ArrowRight') {
        if (square.x===canvas.width-20) {
        }
        else {
            square.x+=10;
      }
  }
    else if (nomTouche === "ArrowLeft") {
        if (square.x===0) {
        }
        else {
            square.x-=10;
        }
    }
    else if (nomTouche === "ArrowUp") {
        if (square.y===0) {
        }
        else {
            square.y-=10;
        }
    }
    else if (nomTouche === "ArrowDown") {
        if (square.y===canvas.height-20) {
        }
        else {
            square.y+=10;
        }
    }
    else {
    }
      context.clearRect(0,0,800,600);
      drawSquare();
}
function drawSquare() {
    context.fillStyle = square.color;
    context.fillRect(square.x,square.y,square.length,square.length);
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    canvas = document.getElementById("drawing");
    context = canvas.getContext("2d");
    drawSquare();
    
    document.addEventListener('keydown', keyBoard);    
});