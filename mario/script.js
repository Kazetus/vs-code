function Jeu(titre, annee, console, image, description) {
    this.titre = titre;
    this.annee = annee;
    this.console = console;
    this.image = image;
    this.description = description;
}

let p=0;
let container = document.getElementById('container');
let g = document.getElementById('g');
let d = document.getElementById('d');
let pop = document.getElementById('pop');
pop.addEventListener('click', () => {
    pop.innerHTML = "";
    pop.classList.remove('active');
})

let maCollection = {
    mario1 : new Jeu("Super Mario bros", "1985", "Nintendo Entertainment system", "mario1", "Super Mario Bros. (スーパーマリオブラザーズ, Sūpā Mario Burazāzu?) est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario."),
    mario2 : new Jeu("Super Mario Bros The Lost Levels", "1986", "Famicom Disk System", "mario2", "Super Mario Bros.: The Lost Levels, nommé Super Mario Bros. 2 au Japon, est un jeu vidéo de plates-formes édité par Nintendo et développé par Nintendo R&D4 faisant partie de la série Super Mario. Il sort sur Famicom Disk System en juin 1986 au Japon."),
    mario3 : new Jeu("Super Mario bros 2", "2001", "Nintendo Entertainment system", "mario3", "Super Mario Bros. 2 est un jeu vidéo de plates-formes développé par Nintendo R&D4 et édité par Nintendo. Il sort sur Nintendo Entertainment System en 1988 en Amérique du Nord, en 1989 en Europe puis en 1992 au Japon."),
    mario4 : new Jeu("Super Mario bros 3", "2003", "Nintendo Entertainment system", "mario4", "Super Mario Bros. 3 est un jeu vidéo de plates-formes développé et édité par Nintendo sur Nintendo Entertainment System. Il s'agit du troisième volet de la série Super Mario et il est commercialisé en 1988 au Japon, en 1990 aux États-Unis et en 1991 en Europe"),
    mario5 : new Jeu("Super Mario 64", "1996" ,"Nintedo 64", "mario5", "Super Mario 64 est un jeu de plates-formes développé par le studio japonais Nintendo Entertainment Analysis and Development sous la direction de Shigeru Miyamoto et publié par Nintendo pour la Nintendo 64. Il sort au Japon et aux États-Unis en 1996 puis en Europe et en Australie en 1997."),
    mario6 : new Jeu("New Super Mario bros", "2006", "Nintendo DS", "mario6", "New Super Mario Bros. (New スーパーマリオブラザーズ, Nyū Sūpā Mario Burazāzu?) est un jeu vidéo de plates-formes édité et développé par Nintendo sur Nintendo DS. Il est sorti en Amérique du Nord et au Japon en mai 2006, puis en Australie et en Europe en juin 2006."),
    mario7 : new Jeu("New super Mario bros Wii", "2009", "Nintendo WII", "mario7", "New Super Mario Bros. Wii est un jeu vidéo de plates-formes sorti le 15 novembre 2009 sur Wii. C'est le premier jeu Super Mario à proposer un mode multijoueur jusqu'à quatre joueurs et le « Super Guide », un système d'aide pour le joueur"),
    mario8 : new Jeu("New Super Mario bros 2", "2012", "Nintendo 3DS", "mario8", "New Super Mario Bros. 2 est un jeu vidéo de plates-formes de la série Super Mario, développé par Nintendo EAD, sorti le 28 juillet 2012 au Japon, et en août 2012 dans le reste du monde sur Nintendo 3DS. Le jeu fait suite à New Super Mario Bros sorti en 2006 sur Nintendo DS"),
    mario9 : new Jeu("New Super Mario bros U", "2012", "Nintendo WII U", "mario9", "New Super Mario Bros. U est un jeu vidéo de plates-formes développé et édité par Nintendo sur Wii U. Le jeu est sorti lors du lancement de la Wii U, en novembre 2012 en Amérique du Nord et en Europe, et en décembre 2012 au Japon."),
    mario10 : new Jeu("New Super Mario Bros U Deluxe", "2019", "Nintendo Switch", "mario10", "Portage du jeu sur Nintendo Switch révélé lors du Nintendo Direct de septembre 2018 et sorti le 11 janvier 2019, New Super Mario Bros. U Deluxe inclut la totalité des niveaux de New Super Mario Bros. U et de New Super Luigi U.")
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
    let div = document.createElement('div');
    div.className = "game";
    div.style.backgroundImage = "url('img/"+el.image+".jpg')";
    div.style.backgroundSize= '100%';
    div.style.backgroundRepeat= 'no-repeat';
    let img = document.createElement('div');
    img.className = "img";
    img.innerHTML = "PLUS";
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
    div.innerHTML=`<div><h2>Console : ${el.console}</h2> <h3>Titre : ${el.titre}</h3> <h4>Année : ${el.annee}</h4></div>`;
    img.addEventListener('click', () => {
        pop.classList.add('active');
        let div = document.createElement('div');
        div.classList.add('content');
        div.innerHTML = `<div class="content--text"><h2>${el.titre}</h2> <h3><span>Console :</span> ${el.console}</h3> <h4><span>Année :</span> ${el.annee}</h4> <p>${el.description}</p></div><div class="content--container"><div class="content--img"><img src="img/marioicon.png"></div><div><img src='img/logo${el.image}.jpg'></div></div>`;
        pop.appendChild(div);
    });
    div.appendChild(img);
    container.appendChild(div);
});

d.addEventListener("click", function(){
    if( p == -nbr+1) {
        p = 0;
    } else {
        p--;
    }
    TranslateImage()
});

g.addEventListener("click", function(){
    if( p == 0) {
        p = -nbr+1;
    } else {
        p++;
    }
    TranslateImage()
});
function TranslateImage() {
    container.style.transform="translate("+p*600+"px)";
}



































