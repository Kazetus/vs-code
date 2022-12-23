<?php

class Personne {
    private $nom;
    private $prenom;
    private $adresse;
    
    public function __construct($nom,$prenom,$adresse){
        $this -> nom = $nom;
        $this -> prenom = $prenom;
        $this -> adresse = $adresse;
    }
    
    public function getPersonne() {
        return $this -> nom ." ". $this -> prenom ." ". $this -> adresse;
    }
    public function setAdresse($adresse) {
        $this -> adresse = $adresse;
    }
}