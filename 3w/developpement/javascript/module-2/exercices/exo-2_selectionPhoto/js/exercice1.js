"use strict";
let img = [];
let selected;
let count;

function select(){
    this.classList.toggle("selected");
    selected = 0;
    for (let i=0;i<img.length;i++){
        if(img[i].classList.contains("selected")) {
            selected++;
        }
        else {}
    }
    console.log(selected);
    console.log(count);
    selected.toString();
    count.textContent = selected;
}

img = document.querySelectorAll("li");
count = document.getElementById("nombre");
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
for(let i=0; i<img.length; i++) {
    img[i].addEventListener("click",select);
}
