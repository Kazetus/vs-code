<?php
declare(strict_types=1);

namespace php\models\dish;

use php\config\Connexion;

class Dish extends Connexion {
    private $connexion;
    
    public function __construct() {
        $this -> connexion = $this -> getConnexion();
    }
    
    public function getDishs(): ?array {
        $dishs = null;
        $query = $this -> connexion -> prepare('
                                            SELECT
                                                `ID_dish`,
                                                `dishName`,
                                                `Categorie`,
                                                `Price`,
                                                `Photos`
                                            FROM
                                                `dish`
                                                ');
        $query -> execute();
        $dishs = $query -> fetchAll();
        return $dishs;
    }
    public function getDishById($dish) {
        $query = $this -> connexion -> prepare('
                                        SELECT
                                            `ID_dish`,
                                            `DishName`,
                                            `Categorie`,
                                            `Price`,
                                            `Photos`
                                        FROM
                                            `dish`
                                        WHERE
                                            `ID_dish` = ?
                                        ');
        $query -> execute([$dish]);
        $displaydish = $query -> fetch();
        return $displaydish;
    }
    public function addNewDish($dishName,$categorie,$price,$image):bool {
        $query = $this -> connexion -> prepare('
                                        INSERT INTO
                                            dish (
                                                `dishName`,
                                                `categorie`,
                                                `price`,
                                                `Photos`
                                            )
                                        VALUES (
                                            ?,
                                            ?,
                                            ?,
                                            ?
                                            )
                                        ');
        $test = $query -> execute([$dishName,$categorie,$price,$image]);
        return $test;
    }
    public function editADish($id,$dishName,$categorie,$price,$image):bool {
        $query = $this -> connexion -> prepare('
                                                UPDATE 
                                                    `dish` 
                                                SET 
                                                    `dishName` = ?,
                                                    `Categorie` = ?,
                                                    `Price` = ?,
                                                    `Photos` = ?
                                                WHERE
                                                    `dish`.`ID_dish` = ?;
                                                ');
        $test = $query -> execute([$dishName,$categorie,$price,$image,$id]);
        return $test;
    }
    public function deleteADish($id):bool {
        $query = $this -> connexion -> prepare('
                                            DELETE FROM
                                                `dish`
                                            WHERE
                                                `dish`.`ID_dish` = ?
                                                ');
        $test = $query -> execute([$id]);
        return $test;
    }
}
