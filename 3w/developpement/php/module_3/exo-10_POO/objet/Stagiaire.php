<?php
class Stagiaire {
    private $_nom;
    private $_notes;
    private $_moyenne;
    
    public function __construct(string $_nom,array $_notes){
        $this -> _nom = $_nom;
        $this -> _notes = $_notes;
        $this -> _moyenne = 0;
    }
    public function setNom($_nom){
        $this -> _nom = $_nom;
    }
    public function setNotes(array $_notes){
        $this -> _notes = $_notes;
    }
    public function getNom(){
        return $this -> _nom;
    }
    public function getNotes(){
        return $this -> _notes;
    }
    public function getMoyenne(){
        return $this -> _moyenne;
    }
    public function calculerMoyenne(){
        $count = count($this -> _notes);
        $total = 0;
        for ($i = 0; $i < $count;$i++) {
            $total += $this -> _notes[$i];
        }
        $total /= $count;
        $this -> _moyenne = $total;
        return $total;
    }
    public function trouverMin(){
        // $count = count($this -> _notes);
        // $min = 1000;
        // for ($i =0; $i < $count;$i++) {
        //     if ($this -> _notes[$i] < $min) {
        //         $min = $this -> _notes[$i];
        //     }
        //     else {};
        // }
        $min = min($this -> _notes);
        return $min;
    }
    public function trouverMax(){
        // $count = count($this -> _notes);
        // $max=0;
        // for($i=0;$i < $count; $i++) {
        //     if ($this -> _notes[$i] > $max) {
        //         $max = $this -> _notes[$i];
        //     }
        //     else {};
        // }
        $max = max($this -> _notes);
        return $max;
    }
}