<?php
declare(strict_types=1);

namespace php\models\user;

use php\config\Connexion;

class User extends Connexion{
    private $connexion;
    
    public function __construct() {
        $this -> connexion = $this -> getConnexion();
    }
    
    
    public function addUser($lastname,$firstname,$adresse,$postalcode,$city,$tel,$password,$email) {
        $query = $this -> connexion -> prepare ("
                                            INSERT INTO
                                                `user` (
                                                    `admin`,
                                                    `lastName`,
                                                    `firstName`,
                                                    `adresse`,
                                                    `postalCode`,
                                                    `city`,
                                                    `tel`,
                                                    `password`,
                                                    `mail`)
                                            VALUES 
                                                (
                                                '0',
                                                ?,
                                                ?,
                                                ?,
                                                ?,
                                                ?,
                                                ?,
                                                ?,
                                                ?);
                                                ");
        $test = $query -> execute([
                                $lastname,
                                $firstname,
                                $adresse,
                                $postalcode,
                                $city,
                                $tel,
                                $password,
                                $email
                                ]);
        return $test;
    }
    public function getUserByEmail($email) {
        $query = $this -> connexion -> prepare ("
                                                SELECT
                                                    `ID_user`,
                                                    `lastName`,
                                                    `firstName`,
                                                    `adresse`,
                                                    `postalCode`,
                                                    `city`,
                                                    `tel`,
                                                    `mail`,
                                                    `password`
                                                FROM 
                                                    `user` 
                                                WHERE 
                                                    `mail` = ?");
        $query -> execute([$email]);
        $user = $query -> fetch();
        return $user;
    }
}