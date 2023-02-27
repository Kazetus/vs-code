const carre = document.getElementsByClassName('carre');
const tabCarre = Array.from(carre);
// for (let i = 0; i < carre.length; i++) {
//     if ((i % 2) == 0) {
//         carre[i].style.background = "rgb(255, 170, 170)";
//     }
//     else {
//         carre[i].style.background = "rgb(170, 255, 170)";
//     }
// }

tabCarre.map((element, index) => {
    if (index %2 == 0) {element.style.background = "rgb(255, 0, 0)";}
    else{element.style.background = "rgb(0, 0, 255)";}
    console.log(element)
    }
);