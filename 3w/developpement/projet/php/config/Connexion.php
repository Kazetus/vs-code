<?php
declare(strict_types=1);

namespace php\config;

class Connexion {
    
    private const SERVEUR = "db.3wa.io";
    private const USER = "matthiasmunoz";
    private const MDP = "c8f9691e444b03d5ca74d7c7badcc806";
    private const BDD = "matthiasmunoz_Restau";
    private $connexion;
    
    public function getConnexion() : ?\PDO {
        try
        {
            $this -> connexion = new \PDO("mysql:host=".self::SERVEUR.";dbname=".self::BDD,self::USER,self::MDP);
            $this -> connexion -> exec("SET CHARACTER SET utf8");
        
        }
        catch(Exception $message)
        {
            echo ' une erreur au moment de la connexion BDD : '.$message->getMessage();
        }
        return $this -> connexion;
    }
}
//  $database = new Connexion();
//  var_dump($database -> getConnexion());