<?php

namespace app\Entity;

abstract class Voiture {
    private string $_couleur;
    private string $_type;
    private string $_immatriculation;
    
    public function __construct(string $couleur, string $type, string $immatriculation) {
        $this -> _couleur = $couleur;
        $this -> _type = $type;
        $this -> _immatriculation = $immatriculation;
    }
    public function setCouleur($couleur) {
        $this -> _couleur = $couleur;
    }
    public function getCouleur() {
        return $this -> _couleur;
    }
    public function setType($type) {
        $this -> _type = $type;
    }
    public function getType() {
        return $this -> _type;
    }
    public function setImmatriculation($immatriculation) {
        $this -> _immatriculation = $immatriculation;
    }
    public function getImmatriculation() {
        return $this -> _immatriculation;
    }
    public function __toString() {
        return "Je suis une voiture";
    }
    abstract public function polluer();
}