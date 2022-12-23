<?php 
class Personne {
    private string $_nom;
    private string $_sexe;
    private object $_adresse;
    
    public function __construct(string $nom,string $sexe,object $adresse){
        $this -> _nom = $nom;
        $this -> _sexe = $sexe;
        $this -> _adresse = $adresse;
    }
    public function setNom(string $nom) {
        $this -> _nom = $nom;
    }
    public function getNom() {
        return $this -> _nom;
    }
    public function setSexe(string $sexe) {
        $this -> _sexe = $sexe;
    }
    public function getSexe() {
        return $this -> _sexe;
    }
    public function setAdresse(object $adresse) {
        $this -> _adresse = $adresse;
    }
    public function getAdresse() {
        return $this -> _adresse;
    }
}