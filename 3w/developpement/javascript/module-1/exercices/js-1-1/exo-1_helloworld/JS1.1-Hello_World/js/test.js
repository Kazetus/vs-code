var somme=0;
var i;
var taille;
var tab=[2,3,8,9,10];
tab[2]=5;
for(i=0,taille=tab.length;i<taille;i++){
somme+=tab[i];
console.log(somme);
}