<?php

namespace app2;

class Ville {
    private string $_nom;
    private string $_population;
    
    public function __construct(string $nom,int $population) {
        $this -> _nom = $nom;    
        $this -> _population = $population;
    }
    public function __toString() {
        $date = new \DateTime();
        return $this -> _nom." ".$this -> _population." ".$date -> format('y-m-d');
    }
}