<?php 
class Formation{
    private $_intitule;
    private $_nbrJours;
    private $_stagiaires;
    
    public function __construct(string $_intitule, int $_nbrJours, array $_stagiaires) {
        $this -> _intitule = $_intitule;
        $this -> _nbrJours = $_nbrJours;
        $this -> _stagiaires = $_stagiaires;
    }
    public function setIntitule(string $_intitule){
        $this -> _intitule = $_intitule;
    }
    public function getIntitule(){
        return $this -> _intitule;
    }
    public function setNbrJours(string $_nbrJours){
        $this -> _nbrJours = $_nbrJours;
    }
    public function getNbrJours(){
        return $this -> _nbrJours;
    }
    public function setStagiaires(string $_stagiaires){
        $this -> _stagiaires[] = $_stagiaires;
    }
    public function getStagiaires(){
        return $this -> _stagiaires;
    }
    public function CalculerMoyenneFormation(){
        $countEleve = count($this -> _stagiaires);
        $totalEleve = 0;
        for ($i=0; $i < $countEleve;$i++) {
            $Eleve = $this -> _stagiaires[$i];
            $totalEleve += $Eleve -> getMoyenne();
        }
        $totalEleve /= $countEleve;
        return $totalEleve;
    }
    public function getIndexMax(){
        $index = 0;
        $note= 0;
        $countEleve = count($this -> _stagiaires);
        for ($i=0;$i < $countEleve; $i++) {
            $Eleve = $this -> _stagiaires[$i];
            $noteEleve = $Eleve -> getMoyenne();
            if ($note < $noteEleve){
                $note = $noteEleve;
                $index = $i;
            }
            else {}
        }
        return $index;
    }
    public function afficherNomMax(){
        $index = $this -> getIndexMax();
        $eleve = $this -> getStagiaires();
        return $eleve[$index]->getNom();
    }
    public function afficherMinMax(){
        $index = $this -> getIndexMax();
        $noteeleve = $this -> _stagiaires[$index] -> trouverMin();
        return $noteeleve;
    }
    public function trouverMoyenneParNom($nom){
        $countEleve = count($this -> _stagiaires);
        $moyenne = 0;
        for($i =0; $i< $countEleve; $i++) {
            if ($moyenne == 0) {
                if($nom === $this -> _stagiaires[$i] -> getNom()) {
                    $moyenne = $this -> _stagiaires[$i] -> getMoyenne();
                }
                else{}
            }
            else{}
        }
        return $moyenne;
    }
}