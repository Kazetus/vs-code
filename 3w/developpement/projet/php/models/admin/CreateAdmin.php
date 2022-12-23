<?php
declare(strict_types=1);
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
class CreateAdmin {
    private $connexion;
    
    public function __construct(){
        $this -> connexion = new Connexion();
    }

    public function generateAdmin($pseudo,$mail,$pass) {
        $query = $this -> connexion -> getConnexion() -> prepare('
                        INSERT INTO
                            `admin` (
                                `pseudo`,
                                `email`,
                                `password`)
                        VALUES (
                            ?,
                            ?,
                            ?)
                                ');
        $test = $query -> execute([$pseudo,$mail,$pass]);
        if($test) {
            return "Admin generation success.";
        }
        else {
            return "A SQL error has occurred.";
        }
    }
}
// $pseudo = "Matthias";
// $mail = "mm@mail.com";
// $pass = password_hash("Admin", PASSWORD_DEFAULT);

// $generator = new CreateAdmin();
// $generator -> generateAdmin($pseudo,$mail,$pass);
