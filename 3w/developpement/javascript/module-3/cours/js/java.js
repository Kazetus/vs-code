'use strict';   // Mode strict du JavaScript
//**** VARIABLES 
let btnText;
let btnRect;
let btnCroix;
let btnImage;
let btnDegrade;
let canvas;
let context;

//**** FONCTIONS
function drawText()
{
    let text = prompt("veuillez saisir votre text");
    
    // font
    context.font = "italic bold 18px Verdana";
    context.fillStyle = "#389924";
    context.fillText(text,200,170,100);
    
}

function drawRect()
{
    //déterminer le crayon (le remplissage)
    context.fillStyle = "blue";
    context.fillRect(10,50,100,160);
}

function dessinCroix()
{
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    
    //1 trait
    // le point de départ 
    context.moveTo(0,0);
    //arrivée 
    context.lineTo(500,500);
    
    //2 trait
    // le point de départ 
    context.moveTo(500,0);
    //arrivée 
    context.lineTo(0,500);
    
    //fermeture du trait
    context.closePath();
    
    //dessin 
    context.stroke();
    
}

function drawImage()
{
    let img = new Image();
    
    img.src = "images/the.jpg";
    
    img.onload = function(){
        context.drawImage(img,200,250);
    }
}

function drawGradient()
{
    let gradient;
    gradient = context.createLinearGradient(0,500,500,500);
    
    gradient.addColorStop(0,"blue");
    gradient.addColorStop(0.5,'green');
    gradient.addColorStop(0.7,"#fff");
    gradient.addColorStop(1,"red");
    
    context.fillStyle = gradient;
    context.fillRect(0,0,500,500);
}

function pick(event)
{
    let rectangle = canvas.getBoundingClientRect();
    // console.log(rectangle);
    
    let x = event.clientX; 
    let y = event.clientY;
    
    let posX = x-rectangle.left;
    let posY = y-rectangle.top;
    
    let couleur = context.getImageData(posX,posY,1,1);
    // console.log(couleur);
    context.fillStyle = 'rgb('+couleur.data[0]+','+couleur.data[1]+','+couleur.data[2]+')';
    context.fillRect(0,0,500,500);
    
}

//**** le code principal
document.addEventListener("DOMContentLoaded",function(){
    
    // selectionner le canvas 
    canvas = document.getElementById("dessin");
    // déterminer le contexte de dessin 
    context = canvas.getContext("2d");
    
    btnText = document.getElementById("text");
    btnRect = document.getElementById("rectPlein");
    btnCroix = document.getElementById("croix");
    btnImage = document.getElementById("image");
    btnDegrade = document.getElementById("degrade");
    
    btnText.addEventListener("click",drawText);
    btnRect.addEventListener("click",drawRect);
    btnCroix.addEventListener("click",dessinCroix);
    btnImage.addEventListener("click",drawImage);
    btnDegrade.addEventListener("click",drawGradient);
    
    //installer un event click sur le canvas 
    canvas.addEventListener("click",pick);
});
