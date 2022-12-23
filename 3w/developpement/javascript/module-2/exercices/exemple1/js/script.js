// **** Déclarations des variables 
let bouton;
let btnChange;
let allDivs;
// **** déclarations des fonctions
function onAfficheText()
{
    let text = prompt("veuillez saisir votre message");
    
    //1- sélectionner l'élément p avec le id afficher
    let paragraphe = document.querySelector("#afficher");
    paragraphe.innerHTML = "<strong>"+text+"</strong>";
}

function onChangeColor()
{
    let divs = document.querySelectorAll("div");
    // console.log(divs);
    for(let i=0;i<divs.length;i++)
    {
        // divs[i].classList.add("colorBlue");// ajouter la classe colorBlue sur mes div 
        divs[i].classList.toggle("colorBlue");// avec effet on/off
    }
}

function onChangeGreen()
{
    // un écouteur d'events qui cible l'élément qui déclanche l'event 
    // this.classList.toggle('colorGreen');
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    
    let color = `rgb(${r},${g},${b})`;
    
    console.log(color);
    // modification d'un style css --> color
    // for(let i=0;i<allDivs.length;i++)
    // {
        this.style.backgroundColor = color;
    // }
    
}
// **** le code principal

// 1- séléctionne des éléments 
// DOM = document object model
// pour cubler des éléments du DOM 
// selecteurs 
// 1- par leur id --> #
// 2- par le nom de la classe -> .
// 3- par le nom de leur balise --> séléctionne par élément --> le nom de la balise p,div,h1...
// 4- par sa position par rapport à d'autres éléments --> p a 

// bouton = document.getElementById("saisie");
bouton = document.querySelector("#saisie");
btnChange = document.querySelector("#changeColor");
allDivs = document.querySelectorAll("div");
// console.log(allDivs);
// installation des events 
// le bouton.addEventListener('l'event, la fnct à lancer)
bouton.addEventListener("click",onAfficheText);
btnChange.addEventListener("click",onChangeColor);

for(let i=0; i<allDivs.length;i++)
{
    allDivs[i].addEventListener("mouseover",onChangeGreen);
}





