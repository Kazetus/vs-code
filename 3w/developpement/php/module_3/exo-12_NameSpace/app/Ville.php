<?php

namespace app;

class Ville {
    private string $_nom;
    
    public function __construct(string $nom) {
        $this -> _nom = $nom;    
    }
    public function __toString() {
        return $this -> _nom;
    }
}