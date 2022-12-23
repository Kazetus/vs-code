<?php

namespace app\Entity;

class Loueur implements \Countable {
    private array $_mesJetskis;
    
    public function __construct(array $mesJetskis){
        $this -> _mesJetskis = $mesJetskis;
    }
    public function setJetskis(array $jetski){
        $this -> _mesJetskis = $jetski;
    }
    public function getJetskis(){
        return $this -> _mesJetskis;
    }
    public function count(){
        return count($this -> _mesJetskis);
    }
}