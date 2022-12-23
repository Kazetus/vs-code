<?php

namespace app\Entity;
use app\Interfaces\Vehicule;
use app\traits\Geolocalisation;
class Jetski implements Vehicule {
    use Geolocalisation;
    private $_marque;
    
    public function __construct($marque){
        $this -> _marque = $marque;
    }
    
    public function rouler() {
        return false;
    }
    public function naviguer() {
        return true;
    }
    public function voler() {
        return false;
    }
}