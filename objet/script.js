function Jeu(titre, annee, console, image) {
    this.titre = titre;
    this.annee = annee;
    this.console = console;
    this.image = image;
}

let p=0;
container = document.getElementById('container');
g = document.getElementById('g');
d = document.getElementById('d');


let maCollection = {
    mario1 : new Jeu("Super Mario bros", "1985", "Nintendo Entertainment system", "mario1"),
    mario2 : new Jeu("Super Mario Bros The Lost Levels", "1986", "Famicom Disk System", "mario2"),
    mario3 : new Jeu("Super Mario bros 2", "2001", "Nintendo Entertainment system", "mario3"),
    mario4 : new Jeu("Super Mario bros 3", "2003", "Nintendo Entertainment system", "mario4"),
    mario5 : new Jeu("New Super Mario bros", "2006", "Nintendo DS", "mario5"),
    mario6 : new Jeu("New super Mario bros Wii", "2009", "Nintendo WII", "mario6"),
    mario7 : new Jeu("New Super Mario bros 2", "2012", "Nintendo 3DS", "mario7"),
    mario8 : new Jeu("New Super Mario bros U", "2012", "Nintendo WII U", "mario8"),
    mario9 : new Jeu("New Super Mario Bros U Deluxe", "2019", "Nintendo Switch", "mario9")
};

let nbr=Object.keys(maCollection).length;
// console.log(maCollection);
// for(mario in maCollection) {
//     let div = document.createElement('div');
//     div.className = "game";
//     div.innerHTML=`<p>Titre : ${maCollection[mario].titre}<p> </p>Année : ${maCollection[mario].annee}<p> </p>Console : ${maCollection[mario].console}<p>`;
//     document.querySelector('body').appendChild(div);
// }
// Grace à la méthode map pour chaque chaque de maCollection créer une div qui aura comme h2, le nom de la console, en h3 le nom du jeu et en h4 l'année.
Object.values(maCollection).map(el => {
    console.log(el);
    let div = document.createElement('div');
    div.className = "game";
    div.style.backgroundImage = "url('img/"+el.image+".jpg')";
    div.style.backgroundSize= '100%';
    div.style.backgroundRepeat= 'no-repeat';
    // div.addEventListener('mouseover', ()=> {
    //     div.className = 'gamehover';
    //     div.style.background = "rgb(240, 240, 240)";
    // })
    // div.addEventListener('mouseout', () =>{
    //     div.className = 'game';
    //     div.style.background = "url('img/"+el.image+".jpg')";
    //     div.style.backgroundSize= '100%';
    //     div.style.backgroundRepeat= 'no-repeat';
    // })
    div.innerHTML=`<h2>Console : ${el.console}</h2> <h3>Titre : ${el.titre}</h3> <h4>Année : ${el.annee}</h4> `;
    container.appendChild(div);
});
g.addEventListener("click", function(){
    if( p == -nbr+1) {
        p = 0;
    } else {
        p--;
    }
    TranslateImage()
});

d.addEventListener("click", function(){
    if( p == 0) {
        p = -nbr+1;
    } else {
        p++;
    }
    TranslateImage()
});
function TranslateImage() {
    container.style.transform="translate("+p*400+"px)";
}
let exempleArray = [0, 1, 2, 3]
console.log(exempleArray[exempleArray.length-1] + exempleArray[exempleArray.length-2]);




// On veut la somme des deux dernières entrées du tableau.
let monArray = [0,1,2,3]
let somme = monArray[2] + monArray[3];
console.log(somme);

// Faire une suite de Fibonacci sur un tableau jusqu'à ce que la 
// dernière valeur soit la plus proche de 50 sans dépasser 50.


let fibo = [0,1,1]

// while((fibo[fibo.length-1] + fibo[fibo.length-2]) < 50) {
//     fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2])
// }

for(let i = 2; (fibo[i] + fibo[i - 1]) < 50; i++) {
        fibo.push(fibo[i] + fibo[i - 1])
}
console.log(fibo);




































