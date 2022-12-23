<?php
class Adresse {
    private string $_rue;
    private string $_ville;
    private string $_codePostal ;
    
    public function __construct(string $rue, string $ville, string $codePostal) {
        $this -> _rue = $rue;
        $this -> _ville = $ville;
        $this -> _codePostal = $codePostal;
    }
    public function setRue(string $rue) {
        $this -> _rue = $rue;
    }
    public function getRue() {
        return $this -> _rue;
    }
    public function setVille(string $ville) {
        $this -> _ville = $ville;
    }
    public function getVille() {
        return $this -> _ville;
    }
    public function setCodePostal(string $codePostal) {
        $this -> _codePostal = $codePostal;
    }
    public function getCodePostal() {
        return $this -> _codePostal;
    }
}