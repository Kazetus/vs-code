'use strict';
/* style=\"position: absolute, left:"+randomx+"px,bottom:"+randomy+"px\"*/
/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let btnstart;
let btnstop;
let btnreset;
let timer;
let count;
let cpt=11;
let rocket;
let div;
let randomstar;
let randomx;
let randomy;
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function createStar() {
    for (let i=0;i<150;i++) {
        div = document.createElement("div");
        div.classList.add("star");
        document.body.appendChild(div);
        
        randomstar= Math.ceil(Math.random()*3);
        console.log(randomstar);
        
        randomx = Math.ceil(Math.random()*2000);
        console.log(randomx);
        div.style.left = randomx+"px";
        randomy = Math.ceil(Math.random()*1000);
        console.log(randomy);
        div.style.bottom = randomy+"px";
        
        if (randomstar===1) {
            div.classList.add("tiny");
        }
        else if (randomstar===2) {
            div.classList.add("normal");
        }
        else {
            div.classList.add("big");
        
        }
    }
}
function startTimer() {
    timer = setInterval(countDown, 1000);
    console.log(timer);
}
function countDown() {
    // remove le click sur le bouton strat
    btnstart.removeEventListener("click",startTimer);
    btnstop.addEventListener("click",cancel);
    btnstart.classList.add("disabled");
    btnstop.classList.remove("disabled");
    rocket.src="images/rocket2.gif";
    cpt--;
    if (cpt===0) {
        btnstop.removeEventListener("click",cancel);
        btnstop.classList.add("disabled");
        rocket.src="images/rocket3.gif";
        count.textContent = cpt;
        clearInterval(timer);
        firing();
    }
    else {
        count.textContent = cpt;
    }
}
function firing() {
    rocket.classList.add("tookOff");
}
function cancel() {
    btnstop.removeEventListener("click",cancel);
    clearInterval(timer);
    rocket.src="images/rocket1.png";
    btnstart.addEventListener("click",startTimer);
    btnstart.classList.remove("disabled");
    btnstop.classList.add("disabled");
}
function reset() {
    cancel();
    cpt=11;
    count.textContent = " ";
    rocket.classList.remove("tookOff");
}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
document.addEventListener("DOMContentLoaded", function(){
    btnstart = document.getElementById("firing-button");
    btnstop = document.getElementById("cancel-button");
    btnreset= document.getElementById("reset-button");
    count= document.querySelector("#billboard span");
    rocket= document.getElementById("rocket");
    createStar();
    btnstart.addEventListener("click",startTimer);
    btnreset.addEventListener("click",reset);
});