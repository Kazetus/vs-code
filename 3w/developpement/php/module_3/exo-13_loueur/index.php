<?php

// require "app/Entity/Voiture.php";
// require "app/Entity/Zoe.php";

function chargerClasse($classe)
{
    $classe=str_replace('\\','/',$classe);
    $fileName = stream_resolve_include_path($classe . '.php');
    if ($fileName !== false) {
        require $classe . '.php';
    }
    else {
        $classe = preg_replace("/Entity/","Interfaces",$classe);
        require $classe.'.php';
    }
}
 
spl_autoload_register('chargerClasse');

use app\Entity\Voiture;
use app\Entity\Zoe;
use app\Entity\parcZoe;
use app\Entity\Jetski;
use app\Entity\Loueur;

$Zoe =new Zoe('Rouge',"WX-564-AC");
echo $Zoe -> __toString();
echo $Zoe -> polluer();
$Zoe -> setLatitude(15014);
$Zoe -> setLongitude(15401);
echo "Latitude :".$Zoe -> getLatitude()."<br/>";
echo "Longitude :".$Zoe -> getLongitude()."<br/>";
$Zoe -> recharger();
echo "Energie :".$Zoe -> getEnergie()."<br/>";
$parc =new parcZoe();
echo $parc -> count();
echo Zoe::pub();
$jet1 =new Jetski("Yamaha");
$jet2 =new Jetski("Toyota");
$jet3 =new Jetski("Peugeot");
$jet4 =new Jetski("Renault");
$loueur =new Loueur([$jet1,$jet2,$jet3,$jet4]);
var_dump($loueur);