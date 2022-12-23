<?php

namespace app\Entity;

use app\traits\Geolocalisation;
use app\traits\Rechargeable;
use app\Interfaces\Vehicule;

class Zoe extends Voiture implements Vehicule{
    use Geolocalisation, Rechargeable;
    
    const TYPE_ENERGY="éléctrique";
    
    public function __construct(string $couleur, string $immatriculation) {
        parent::__construct($couleur, self::TYPE_ENERGY, $immatriculation);
    }
    public function __toString() {
        return parent::__toString()." Zoe de type ".$this -> getType()." immatriculée ".$this -> getImmatriculation()."<br/>";
    }
    public function polluer(){
        return "Je roule propre.<br/>";
    }
    public function rouler(){
        return true;
    }
    public function naviguer(){
        return false;
    }
    public function voler(){
        return false;
    }
    public static function pub(){
        return "Acheter une Zoe pour signer votre place de parking d'un 'Z' qui veux dire : 'Zoe'.";
    }
}