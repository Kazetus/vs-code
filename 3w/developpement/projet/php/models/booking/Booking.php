<?php
declare(strict_types=1);

namespace php\models\booking;

use php\config\Connexion;

class Booking extends Connexion {
    private $connexion;
    
    public function __construct() {
        $this -> connexion = $this -> getConnexion();
    }
    public function insertBook($date,$seats,$special,$user):bool
    {
        $query = $this -> connexion -> prepare ("
                                            INSERT INTO
                                                `booking` (
                                                    `date`,
                                                    `seats`,
                                                    `special`,
                                                    `ID_user`
                                                    )
                                            VALUES 
                                                (
                                                ?,
                                                ?,
                                                ?,
                                                ?);
                                                ");
        $test = $query -> execute([
                                $date,
                                $seats,
                                $special,
                                $user
                                ]);
        return $test;
    }
    public function getReser(): ?array {
        $query = $this -> connexion -> prepare('
                                                SELECT
                                                    `ID_reservation`,
                                                    `date`,
                                                    `seats`,
                                                    `special`,
                                                    `booking`.`ID_user`,
                                                    `firstName`,
                                                    `lastName`,
                                                    `tel`
                                                FROM
                                                    `booking`
                                                INNER JOIN
                                                    `user`
                                                ON
                                                    `booking`.`ID_user` = `user`.`ID_user`
                                                ORDER BY 
                                                    `date` DESC
                                                ');
        $query -> execute();
        $books = $query -> fetchAll();
        return $books;
    }
}