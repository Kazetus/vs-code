"use strict";
/*import CircleDraw from "./module/CircleDraw.js";*/
/*import SquareDraw from "./module/SquareDraw.js";
import MickeyDraw from "./module/MickeyDraw.js";
import SmileyDraw from "./module/SmileyDraw.js";*/
/*import AllDraw from "./module/AllDraw.js";*/
import RandomDraw from "./module/RandomDraw.js";
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let canvas;
let x;
let y;
let posX;
let posY;
/*let randomize;*/
let all;
/*let circle;*/
/*let mickey;
let square;
let smiley;*/
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
    all.startDrawRandom(posX, posY);
}
/*function randomizer(){
    randomize = Math.floor(Math.random()*4);
    if(randomize===0){
        all.startDrawCircle(posX,posY);
    }
    else if(randomize===1){
        all.startDrawMickey(posX,posY);
    }
    else if(randomize===2){
        all.startDrawSquare(posX,posY);
    }
    else {
        all.startDrawSmiley(posX,posY);
    }
}*/
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    canvas = document.getElementById("drawing");
    /*circle = new CircleDraw;
    mickey = new MickeyDraw;
    square= new SquareDraw;
    smiley = new SmileyDraw;*/
    all = new RandomDraw();
    canvas.addEventListener("click",pick);
});