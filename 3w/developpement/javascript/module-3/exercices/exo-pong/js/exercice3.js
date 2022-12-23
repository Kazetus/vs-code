"use strict";
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let square = {
    color: "#8A2BE2",
    length:100,
    width:10,
    x:0,
    y:0
};
let square2 = {
    color: "#8A2BE2",
    length:100,
    width:10,
    x:0,
    y:0
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
    if (nomTouche === 'ArrowUp') {
        if (square.y===0) {
        }
        else {
            square.y-=50;
      }
  }
    else if (nomTouche === "ArrowDown") {
        if (square.y>=canvas.height-square.length) {
        }
        else {
            square.y+=50;
        }
    }
    if (nomTouche === 'z') {
        if (square2.y===0) {
        }
        else {
            square2.y-=50;
      }
  }
    else if (nomTouche === "s") {
        if (square2.y>=canvas.height-square2.length) {
        }
        else {
            square2.y+=50;
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
      drawSquare2();
}
function drawSquare() {
    context.fillStyle = square.color;
    context.fillRect(square.x,square.y,square.width,square.length);
}
function drawSquare2() {
    context.fillStyle = square.color;
    context.fillRect(square2.x,square2.y,square2.width,square2.length);
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
        circle.deltay = -2;
        circle.y += circle.deltay;
        circle.x += circle.deltax;
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
    drawSquare2();
    raf = window.requestAnimationFrame(moveCircle);
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    canvas = document.getElementById("drawing");
    context = canvas.getContext("2d");
    square2.x=canvas.width-square2.width;
    drawSquare2();
    drawSquare();
    drawCircle();
    raf = window.requestAnimationFrame(moveCircle);
    document.addEventListener('keydown', keyBoard);    
});