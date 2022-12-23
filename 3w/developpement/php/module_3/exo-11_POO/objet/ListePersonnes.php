<?php
class ListePersonnes {
    private array $_personnes;
    
    public function __construct(array $personnes) {
        $this -> _personnes = $personnes;
    }
    public function setPersonnes(array $personnes) {
        $this -> _personnes = $personnes;
    }
    public function getPersonnes() {
        return $this -> _personnes;
    }
    public function findByNom(string $s) {
        $liste = $this -> _personnes;
        $nom = [];
        for($i = 0; $i < count($liste);$i++) {
            if(empty($nom)) {
                if($s === $liste[$i] -> getNom()) {
                    $nom = $liste[$i];
                }
                else{}
                }
            else{};
        }
        if(empty($nom)){
            return "null";
        }
        else {
            return $nom;
        }
    }
    public function findByCodePostal(string $cp) {
        $liste = $this -> _personnes;
        $check = false;
        for ($i = 0 ; $i < count($liste) ; $i++){
            $perso = $liste[$i] -> getAdresse() -> getCodePostal();
            if ($check === false) {
                if ($perso === $cp) {
                    $check = true;
                }
                else {}
            }
            else {}
        }
        return $check;
    }
    public function countPersonneVille(string $ville) {
        $liste = $this -> _personnes;
        $count = 0;
        for ($i = 0; $i < count($liste) ; $i++) {
            $city = $liste[$i] -> getAdresse() -> getVille();
            if ($city === $ville) {
                $count++;
            }
            else {}
        }
        return $count;
    }
    public function editPersonneNom(string $old, string$new) {
        $this -> findByNom($old) -> setNom($new);
    }
    public function editPersonneVille(string $nom, string $newVille) {
        $this -> findByNom($nom) -> getAdresse() -> setVille($newVille);
    }
}



