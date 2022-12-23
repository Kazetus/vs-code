<?php 
require "objet/Adresse.php";
require "objet/Personne.php";
require "objet/ListePersonnes.php";

$adresse1 =new Adresse("Aristide Briand", "Nice", "06100");
$personne1 =new Personne('Matthias','M', $adresse1);
$adresse2 =new adresse("Clémenceau","Buis", "26170");
$personne2 =new Personne('Tristan','M', $adresse2);
$adresse3 =new Adresse("République", "Nice", "06000");
$personne3 =new Personne('Richard','M', $adresse3);
$adresse4 =new adresse("De gaule","Marseille", "13000");
$personne4 =new Personne('Kahlan','F', $adresse4);
$liste = new ListePersonnes([$personne1, $personne2, $personne3, $personne4]);
$search = $liste -> findByNom('Matthias');
var_dump($search);
$cp = $liste -> findByCodePostal("06100");
var_dump($cp);
$count = $liste -> countPersonneVille('Nice');
echo $count;
$editName = $liste -> editPersonneNom('Matthias', 'Henry');
var_dump($liste -> findByNom('Henry'));
$editVille = $liste -> editPersonneVille('Henry', 'Paris');
var_dump($liste -> findByNom('Henry'));