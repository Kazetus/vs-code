<?php

class City {
    private $nom;
    private $departement;
    
    public function __construct($nom,$departement){
        $this -> nom = $nom;
        $this -> departement = $departement;
    }
    
    public function afficher(){
        echo "La ville de ".$this -> nom ." est dans le département ". $this -> departement ;
    }
}