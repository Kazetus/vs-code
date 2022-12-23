<?php
declare(strict_types=1);

namespace php\models\admin;

use php\config\Connexion;

class Admin extends Connexion {
    private $connexion;
    
    public function __construct() {
        $this -> connexion = $this -> getConnexion();
    }
    public function getAdminByPseudo($pseudo) {
        $query = $this -> connexion -> prepare('
                                                SELECT
                                                    `pseudo`,
                                                    `email`,
                                                    `password`
                                                FROM
                                                    `admin`
                                                WHERE
                                                    `pseudo` = ?
                                                ');
        $query -> execute([$pseudo]);
        $adminOn = $query -> fetch();
        return $adminOn;
    }
}