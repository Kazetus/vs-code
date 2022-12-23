<?php

namespace app\Entity;

class parcZoe implements \Countable{
    private array $_mesZoe;
    
    public function __construct() {
        $this -> _mesZoe[0] = new Zoe('Rouge','WX-456-AV');
        $this -> _mesZoe[1] = new Zoe('Bleu','WX-476-DR');
        $this -> _mesZoe[2] = new Zoe('Rouge','WX-965-ZT');
    }
    public function vachercherdansbd() {
        return "non disponible pour le moment.";
    }
    public function count() {
        return count($this -> _mesZoe);
    }
}