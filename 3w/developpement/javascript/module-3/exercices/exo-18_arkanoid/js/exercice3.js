"use strict";
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let square = {
    color: "#8A2BE2",
    length:10,
    width:100,
    x:0,
    y:580
};
let circle = {
    color: "green",
    radius:5,
    x:10,
    y:10,
    deltax: 5,
    deltay: 2,
};
let raf;
let deltaRandX;
let deltaRandY;
let canvas;
let cpt=1;
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
        if (square.x===canvas.width-square.width) {
        }
        else {
            square.x+=50;
      }
  }
    else if (nomTouche === "ArrowLeft") {
        if (square.x<=0) {
        }
        else {
            square.x-=50;
        }
    }
    else if (nomTouche === " ") {
        circle.x =10;
        circle.y =10;
        cpt = 1;
    }
    else {
    }
      context.clearRect(0,0,800,600);
      drawSquare(); 
      drawCircle();
}
function drawSquare() {
    context.fillStyle = square.color;
    context.fillRect(square.x,square.y,square.width,square.length);
}
function drawCircle() {
    context.beginPath();
    context.fillStyle = circle.color;
    context.strokeStyle = circle.color;
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
    randomStart();
}
function moveCircle() {
    if (circle.x>=canvas.width-5) {
        circle.deltax = -deltaRandX;
        circle.x += circle.deltax;
        circle.y += circle.deltay;
    }
    else if (circle.x <= 5) {
        circle.deltax = deltaRandX;
        circle.x += circle.deltax;
        circle.y += circle.deltay;
    }
    else if (circle.y>=580) {
        if (square.x < circle.x && circle.x < square.x+ square.width) {
        circle.deltay = -deltaRandY;
        circle.y += circle.deltay;
        circle.x += circle.deltax;
        }
        else {
        randomStart();
        circle.deltax=deltaRandX;
        circle.deltay=deltaRandY;
        circle.y = 10;
        circle.x = 10;
        }
    }
    else if (circle.y <= 5) {
        circle.deltay = deltaRandY;
        circle.y += circle.deltay;
        circle.x += circle.deltax;
    }
    else {
    circle.y += circle.deltay;
    circle.x += circle.deltax;
    }
    context.clearRect(0,0,800,600);
    drawCircle();
    drawSquare();
    raf = window.requestAnimationFrame(moveCircle);
}
function randomStart (){
    deltaRandX=Math.ceil(Math.random()*(7-3)+3);
    deltaRandY=Math.ceil(Math.random()*(5-2)+2);
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    canvas = document.getElementById("drawing");
    context = canvas.getContext("2d");
    drawSquare();
    drawCircle();
    raf = window.requestAnimationFrame(moveCircle);
    document.addEventListener('keydown', keyBoard);    
});