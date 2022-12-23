'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let back;
let forward;
let play;
let shuffle;
let tool;
let toolbar;
let img;
let title;
let arrow;
let rand;
let i=0;
let timer;
const listeimage = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];
const listetexte = ["street art", "Autoroute maritime","batiment coloré", "immeuble de nuit", "ville animé de nuit","Paris de nuit"];
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
//Fonction interface
function changeFleche() {
    arrow.classList.toggle("fa-arrow-down");
    arrow.classList.toggle("fa-arrow-right");
}
function playpause() {
    play.classList.toggle("fa-play");
    play.classList.toggle("fa-pause");
}
function hideTool() {
    toolbar.classList.toggle("hide");
    changeFleche();
}
//Fonction pour lire et avancer
function setTimer() {
    playpause();
    play.removeEventListener('click',setTimer);
    play.addEventListener("click",clearTimer);
    timer = setInterval(readList, 1000);
}
function clearTimer() {
    playpause();
    clearInterval(timer);
    play.addEventListener("click",setTimer);
}
function readList() {
    i++;
    if (i===listeimage.length) {
        i=0;
    }
    img.src= listeimage[i];
    img.alt= listetexte[i];
    title.textContent = listetexte[i];
    console.log(img);
}
// Reculer
function backward() {
    i--;
    if (i===-1) {
        i=listeimage.length-1;
    }
    img.src= listeimage[i];
    img.alt= listetexte[i];
    title.textContent = listetexte[i];
    console.log(img);
}
// Au hasard
function random() {
    rand= Math.floor(Math.random()*6);
    console.log(rand);
    if (i === rand) {
        random();
    }
    img.src= listeimage[rand];
    img.alt= listetexte[rand];
    title.textContent = listetexte[rand];
    i=rand;
}
// Contrôle au clavier
function keyBoard() {
  let nomTouche = event.key;
  if (nomTouche === 'ArrowRight') {
    readList();
  }
  else if (nomTouche === "ArrowLeft") {
      backward();
  }
  else if (nomTouche === " ") {
      setTimer();
      document.removeEventListener('keyup', keyBoard);
      document.addEventListener('keyup', keyBoard2);
  }
  else if (nomTouche === "r") {
      random();
  }
  else {
      event.preventDefault();
  }
}
function keyBoard2() {
    let nomTouche = event.key;
    if (nomTouche === " ") {
        clearInterval(timer);
      document.addEventListener('keyup', keyBoard);
      document.removeEventListener('keyup', keyBoard2);
    }
    else {
        event.preventDefault();
    }
    
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    tool = document.getElementById("tools");
    arrow = document.getElementById("arrow");
    toolbar = document.getElementById("toolbar");
    back = document.getElementById("back");
    forward = document.getElementById("for");
    shuffle = document.getElementById("shuffle");
    play = document.getElementById("read");
    img = document.getElementById("img");
    title = document.getElementById("img-title");
    
    tool.addEventListener("click", hideTool);
    play.addEventListener("click", setTimer);
    forward.addEventListener("click", readList);
    back.addEventListener("click", backward);
    shuffle.addEventListener("click", random);
    document.addEventListener('keyup', keyBoard);
});