"use strict";
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let canvas;
let context;
let x;
let y;
let posX;
let posY;
let radius;
let randomize;
//couleur
let r;
let g;
let b;
let opacite;
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function pick(event) {
    let styleTop = parseInt(window.getComputedStyle(canvas).getPropertyValue("border-top-width"),10);
    let styleLeft = parseInt(window.getComputedStyle(canvas).getPropertyValue("border-left-width"),10);
    let cercle = canvas.getBoundingClientRect();
    x = event.clientX; 
    y = event.clientY;
    posX = x-cercle.left-styleLeft;
    posY = y-cercle.top-styleTop; 
    randomizer();
}
function circleRadius(){
    radius= Math.ceil(Math.random()*(50-20))+20;
}
function drawCircle() {
    context.beginPath();
    context.arc(posX, posY, radius, 0, Math.PI*2);
    context.fillStyle = 'rgba('+r+','+g+','+b+','+opacite+')';
    context.fill();
    context.closePath();
}
function drawSquare() {
    context.fillStyle = 'rgba('+r+','+g+','+b+','+opacite+')';
    context.fillRect(posX,posY,radius,radius);
}
function color(){
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    opacite=Math.random();
    opacite=opacite.toFixed(1);

}
function createMickey() {
    context.beginPath();
    context.arc(posX, posY, radius, 0, Math.PI*2);
    context.fillStyle = 'rgba('+r+','+g+','+b+',1)';
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(posX+radius, posY-radius, radius-30/100*radius , 0, Math.PI*2);
    context.fillStyle = 'rgba('+r+','+g+','+b+','+opacite+')';
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(posX-radius, posY-radius, radius-30/100*radius , 0, Math.PI*2);
    context.fillStyle = 'rgba('+r+','+g+','+b+','+opacite+')';
    context.fill();
    context.closePath();
}
function createSmiley() {
    context.beginPath();
    context.arc(posX, posY, 50, 0, Math.PI*2);
    context.fillStyle = "Yellow";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(posX+15, posY-20, 5,0, Math.PI*2);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.beginPath();
    context.arc(posX-15, posY-20, 5, 0, Math.PI*2);
    context.fillStyle = 'black';
    context.fill();
    context.closePath();
        context.beginPath();
    context.arc(posX, posY+10, 25, 0, 1*Math.PI);
    context.fillStyle = 'white';
    context.fill();
    context.closePath();
}
function importImage(){
    let img = new Image();
    
    img.src = "images/warrior.png";
    
    img.onload = function(){
        context.drawImage(img,posX,posY);
    };
}
function randomizer(){
    circleRadius();
    color();
    randomize = Math.floor(Math.random()*5);
    console.log(randomize);
    if(randomize===0){
        drawCircle();
    }
    else if(randomize===1){
        createMickey();
    }
    else if(randomize===2){
        drawSquare();
    }
    else if(randomize===3){
        createSmiley();
    }
    else {
        importImage();
    }
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    canvas = document.getElementById("drawing");
    context = canvas.getContext("2d");
    
    canvas.addEventListener("click",pick);
});