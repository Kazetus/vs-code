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
    x:20,
    y:570,
    deltax: 5,
    deltay: 2,
};
let raf;
let canvas;
let cptvie=3;
let cptTouch=0;
let context;
let nomTouche;
let brickLine = 9;
let brickColumn = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let bricks = [];

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
        window.cancelAnimationFrame(raf);
        document.removeEventListener('keydown', keyBoard);
        document.addEventListener('keydown', keyBoard2);
    }
    else {
    }
}
function keyBoard2(){
    event.preventDefault();
    if (nomTouche === " ") {
        document.addEventListener('keydown', keyBoard);
        raf = window.requestAnimationFrame(moveCircle);
        document.removeEventListner('keydown', keyBoard2);
    }
    else {
        
    }
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
    context.clearRect(0,0,800,600);
    drawAll();
    collisionDetection();
    if (circle.x>=canvas.width-5) {
        circle.deltax = -circle.deltax;
        bounce();
    }
    else if (circle.x <= 5) {
        circle.deltax = -circle.deltax;
        bounce();
    }
    else if (circle.y>=580) {
        if (square.x <= circle.x && circle.x <= square.x + square.width) {
        circle.deltay = -circle.deltay;
        circle.deltax = circle.deltax*(1.5+((Math.sqrt(Math.pow(square.x+square.width/2-circle.x, 2))-square.width/4)/(square.width/4)));// deltax=1+(racine de (square.x+width/2-circle.x)²-width/4)/(width/4)/1+((Math.sqrt(Math.pow(square.x+square.width/2-circle.x))-square.width/4)/(square.width/4));;
        console.log(circle.deltax);
        bounce();
        }
        else {
        compteurVie();
        }
    }
    else if (circle.y <= 5) {
        circle.deltay = -circle.deltay;
        bounce();
    }
    else {
        bounce();
    }
    raf = window.requestAnimationFrame(moveCircle);
}
function brickExist() {
    for(let i=0; i<brickColumn; i++) {
        bricks[i] = [];
        for(let j=0; j<brickLine; j++) {
            bricks[i][j] = { x: 0, y: 0, status: 1 };
        }
    } 
}
function drawBricks() {
    for(let i=0; i<brickColumn; i++) {
        for(let j=0; j<brickLine; j++) {
            if(bricks[i][j].status == 1) {
                let brickX = (j*(brickWidth+brickPadding))+brickOffsetLeft;
                let brickY = (i*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[i][j].x = brickX;
                bricks[i][j].y = brickY;
                context.beginPath();
                context.rect(brickX, brickY, brickWidth, brickHeight);
                context.fillStyle = "#0095DD";
                context.fill();
                context.closePath();
            }
        }
    }
}
function collisionDetection() {
    for(let i=0; i<brickColumn; i++) {
        for(let j=0; j<brickLine; j++) {
            let b = bricks[i][j];
            if(b.status == 1) {
                if(circle.x > b.x && circle.x < b.x+brickWidth && circle.y > b.y && circle.y < b.y+brickHeight) {
                    if (circle.x-circle.deltax<b.x || circle.x-circle.deltax>b.x+brickWidth) {
                        circle.deltay= -circle.deltay;
                    }
                    else if (circle.y-circle.deltay<b.y || circle.y-circle.deltay>b.y+brickHeight) {
                        circle.deltax = -circle.deltax    ; 
                    }
                    else {
                        circle.deltay= -circle.deltay;
                    }
                    b.status = 0;
                    verifClear();
                }
            }
        }
    }
}
function bounce() {
    circle.y += circle.deltay;
    circle.x += circle.deltax;
}
function compteurVie() {
    cptvie--;
    if (cptvie===0) {
        restart();
        reDrawBricks();
        drawBricks();
    }
    else {
        restart();
    }
}
function restart() {
    circle.deltax=5;
    circle.deltay=2;
    bounce();
    circle.y = 570;
    circle.x = square.x+20;
}
function reDrawBricks() {
    cptvie=3;
    cptTouch=0;
    for(let i=0; i<brickColumn; i++) {
        for(let j=0; j<brickLine; j++) {
            bricks[i][j].status=1;
        }
    }
}
function verifClear() {
    cptTouch++;
    if (cptTouch===brickColumn*brickLine) {
        restart();
        reDrawBricks();
        drawBricks();
    }
    else{}
}
function drawLifePoint() {
    for (let j=0;j<cptvie;j++) {
        context.fillStyle = square.color;
        context.fillRect(0+11*j, 0, 10, 10);
    }
}
function drawPoints() {
    context.fillText('Points :'+cptTouch, canvas.width-50, 10, 50);
}
function drawAll() {
    drawCircle();
    drawSquare();
    drawBricks();
    drawLifePoint();
    drawPoints();
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    canvas = document.getElementById("drawing");
    context = canvas.getContext("2d");
    brickExist();
    drawSquare();
    drawCircle();
    drawBricks();
    raf = window.requestAnimationFrame(moveCircle);
    document.addEventListener('keydown', keyBoard);    
});