<?php 
require "objet/Stagiaire.php";
require "objet/Formation.php";

$eleve =new Stagiaire("Matthias", [10,12,14,15,13,19,15]);
$eleve2 =new Stagiaire('Richard', [10,12,13,15,14,18,14]);
$eleve3 =new Stagiaire('Kahlan', [15,13,14,19,14,16,18]);
$eleve -> calculerMoyenne();
$eleve2 -> calculerMoyenne();
$eleve3 -> calculerMoyenne();
$formation =new Formation("3wa",375,[$eleve, $eleve2, $eleve3]);
echo "La moyenne des élèves est de : ".$formation -> CalculerMoyenneFormation()."<br/>";
echo "L'index de la meilleure moyenne des élèves est de : ".$formation -> getIndexMax()."<br/>";
echo "L'Elève ayant la meilleure moyenne est : ".$formation -> afficherNomMax()."<br/>";
echo "La plus basse note de l'Eleve ayant la meilleure moyenne est : ".$formation -> afficherMinMax()."<br/>";
echo "La moyenne de Richard est : ".$formation -> trouverMoyenneParNom("Richard").'<br/>';