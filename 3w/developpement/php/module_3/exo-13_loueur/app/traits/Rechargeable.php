<?php

namespace app\traits;

trait Rechargeable {
    private int $_valeurEnergie;
    
    public function setEnergie($valeurEnergie) {
        $this -> _valeurEnergie = $valeurEnergie;
    }
    public function getEnergie() {
        return $this -> _valeurEnergie;
    }
    public function recharger() {
        $this -> _valeurEnergie = 100; 
    }
}