function Jeu(titre, annee, console) {
    this.titre = titre;
    this.annee = annee;
    this.console = console;
}



let maCollection = {
    mario1 : new Jeu("Mario bros", "1983", "Nintendo Entertainment system"),
    mario2 : new Jeu("Super Mario bros", "1985", "Nintendo Entertainment system"),
    mario3 : new Jeu("Super Mario bros 2", "2001", "Game Boy Advance"),
    mario4 : new Jeu("Super Mario bros 3", "2003", "Game Boy Advance"),
    mario5 : new Jeu("New Super Mario bros", "2006", "Nintendo DS"),
    mario6 : new Jeu("New super Mario bros Wii", "2009", "Nintendo WII"),
    mario7 : new Jeu("New Super Mario bros 2", "2012", "Nintendo 3DS"),
    mario8 : new Jeu("New Super Mario bros U", "2012", "Nintendo WII U"),
    mario9 : new Jeu("New Super Mario Bros U Deluxe", "2019", "Nintendo Switch"),
    mario10 : new Jeu("Super Mario Bros The Lost Levels", "1986", "Famicom Disk System")
    
};
console.log(maCollection);
for(mario in maCollection) {
    let div = document.createElement('div');
    div.className = "game";
    div.innerHTML=`<p>Titre : ${maCollection[mario].titre}<p> </p>Année : ${maCollection[mario].annee}<p> </p>Console : ${maCollection[mario].console}<p>`;
    document.querySelector('body').appendChild(div);
}
// Grace à la méthode pour chaque chaque de maCollection créer une div qui aura comme h2, le nom de la console, en h3 le nom du jeu et en h4 l'année.