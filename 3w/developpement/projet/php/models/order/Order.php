<?php
declare(strict_types=1);

namespace php\models\order;

use php\config\Connexion;

class Order extends Connexion{
    private $connexion;
    
    public function __construct() {
        $this -> connexion = $this -> getConnexion();
    }
    
    
    public function addOrder($date, $user) {
        $query = $this -> connexion -> prepare ("
                                            INSERT INTO
                                                `orders` (
                                                    `Date`,
                                                    `ID_user`
                                                    )
                                            VALUES 
                                                (
                                                ?,
                                                ?
                                                );
                                                ");
        $test = $query -> execute([
                                    $date,
                                    $user
                                ]);
        return $test;
    }
    public function getLastOrderId() {
        $query = $this -> connexion -> prepare ("
                                                SELECT
                                                    `ID_order`,
                                                    `Date`,
                                                    `ID_user`
                                                FROM
                                                    `orders`
                                                ORDER BY
                                                    `ID_order` DESC
                                                ");
        $query -> execute();
        $idOrder = $query -> fetch();
        return $idOrder;
    }
    public function addDetail($idDish,$idOrder,$name,$quantity,$price):bool {
        $query = $this -> connexion -> prepare ("
                                                INSERT INTO
                                                    `detailOrders` (
                                                                `ID_dish`,
                                                                `ID_order`,
                                                                `dishName`,
                                                                `quantity`,
                                                                `unit_price`
                                                                )
                                                VALUES (
                                                    ?,
                                                    ?,
                                                    ?,
                                                    ?,
                                                    ?);
                                                ");
        $test = $query -> execute([$idDish,$idOrder,$name,$quantity,$price]);
        return $test;
    }
    public function getOrder(): ?array {
        $query = $this -> connexion -> prepare('
                                            SELECT
                                                `ID_order`,
                                                `Date`,
                                                `orders`.`ID_user`,
                                                `firstName`,
                                                `lastName`,
                                                `adresse`,
                                                `postalCode`,
                                                `city`,
                                                `tel`
                                            FROM
                                                `orders` 
                                            INNER JOIN 
                                                `user` 
                                            ON 
                                                `orders`.`ID_user` = `user`.`ID_user`
                                            ORDER BY
                                                `Date`
                                            DESC
                                                ');
        $query -> execute();
        $orderlist = $query -> fetchAll();
        return $orderlist;
    }
    public function getDetail(): ?array {
        $query = $this -> connexion -> prepare('
                                            SELECT
                                                `ID_order`,
                                                `dishName`,
                                                `quantity`,
                                                `unit_price`
                                            FROM
                                                `detailOrders`
                                                ');
        $query -> execute();
        $detaillist = $query -> fetchAll();
        return $detaillist;
    }
}