let button = document.getElementById("colorme");
let body = document.querySelector('body');

function color() {
    return Math.floor(Math.random()*256);
}

button.addEventListener('click', function() {
    body.style.background = `rgb(${color()},${color()},${color()})`
});

var img = document.querySelector('img');

img.src = "img/dragon.jpg";

const arrFruit = Array.from(document.getElementsByClassName('id'));

arrFruit.map(el => console.log(el.getAttribute('id')));

function logger() {
    console.log(this.getAttribute('id'));
}
arrFruit.map(el => el.addEventListener('click', logger));


