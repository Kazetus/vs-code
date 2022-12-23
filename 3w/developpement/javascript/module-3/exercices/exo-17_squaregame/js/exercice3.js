"use strict";
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let square = {
    color: "#8A2BE2",
    length:10,
    width:50,
    x:10,
    y:580
};
let circle = {
    color: "green",
    radius:5,
    x:10,
    y:10,
    deltax:5,
    deltay:2,
};
let raf;
let canvas;
let context;
let nomTouche;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function keyBoard() {
  /*  event.preventDefault();*/

    nomTouche = event.key;
    moveSquare();
}
function moveSquare() {
    if (nomTouche === 'ArrowRight') {
        if (square.x===canvas.width-50) {
        }
        else {
            square.x+=20;
      }
  }
    else if (nomTouche === "ArrowLeft") {
        if (square.x<=0) {
        }
        else {
            square.x-=20;
        }
    }
    else if (nomTouche === " ") {
        window.cancelAnimationFrame(raf);
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
}
function moveCircle() {
    if (circle.x>=canvas.width-5) {
        circle.deltax = -5;
        circle.x += circle.deltax;
        circle.y += circle.deltay;
    }
    else if (circle.x <= 5) {
        circle.deltax = 5;
        circle.x += circle.deltax;
        circle.y += circle.deltay;
    }
    else if (circle.y>=580) {
        if (square.x < circle.x && circle.x < square.x+50) {
        circle.deltay = -2;
        circle.y += circle.deltay;
        circle.x += circle.deltax;
        console.log(circle.x);
        console.log(square.x);
        }
        else {    
        circle.y = 10;
        circle.x = 10;
        }
    }
    else if (circle.y <= 5) {
        circle.deltay = 2;
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