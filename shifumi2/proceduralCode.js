const img = document.querySelectorAll('.commandes img');
const tab = ['pierre', 'feuille', 'ciseaux'];
const resultat = document.getElementById('resultat');
const msgResult = document.getElementById('msgResult');
img.forEach(element => {
    element.addEventListener(
        'click',
        function (e) {
            var joueur = e.currentTarget.id;
            var ordinateur = tab[Math.floor(Math.random() * 3)];
            resultat.setAttribute('src', 'img/' + ordinateur + '.png');
            resultat.setAttribute('alt', ordinateur);
            if (joueur == ordinateur) {
                console.log('égalité');
                msgResult.innerHTML = 'égalité';
            } else if (
                joueur == 'pierre' && ordinateur == 'ciseaux' ||
                joueur == 'feuille' && ordinateur == 'pierre' ||
                joueur == 'ciseaux' && ordinateur == 'feuille'
            ) {
                console.log('win');
                msgResult.innerHTML = 'win';
            } else {
                console.log('loose');
                msgResult.innerHTML = 'lose';
            }
        }
    )
});