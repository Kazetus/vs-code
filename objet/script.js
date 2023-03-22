function Jeu(titre, annee, console, image) {
    this.titre = titre;
    this.annee = annee;
    this.console = console;
    this.image = image;
}



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
    div.addEventListener('mouseover', ()=> {
        div.className = 'gamehover';
        div.style.background = "rgb(240, 240, 240)";
    })
    div.addEventListener('mouseout', () =>{
        div.className = 'game';
        div.style.background = "url('img/"+el.image+".jpg')";
        div.style.backgroundSize= '100%';
        div.style.backgroundRepeat= 'no-repeat';
    })
    div.innerHTML=`<h2>Console : ${el.console}</h2> <h3>Titre : ${el.titre}</h3> <h4>Année : ${el.annee}</h4> `;
    document.querySelector('body').appendChild(div);
});