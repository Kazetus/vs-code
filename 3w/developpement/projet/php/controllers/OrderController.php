<?php
declare(strict_types=1);

namespace php\controllers;
use php\models\order\Order;
use php\models\dish\Dish;
use php\controllers\SecurityController;

class OrderController extends SecurityController {
    private $dish;
    private $order;
    
    public function __construct() {
        $this -> dish = new Dish();
        $this -> order = new Order();
    }
    public function order() {
        if ($this -> isConnect()) {
            $listdishs = $this -> dish -> getDishs();
            $template = "php/vue/order/order";
            
            
            require "php/vue/layout.phtml";
        }
        else {
            header('location:index.php?action=login');
        }
    }
    public function cmdAjax($dishid) {
        $detail = $this -> dish -> getDishById($dishid);
        echo json_encode($detail);
    }
    public function sendOrder($detailOrder) {
        if($_SESSION['user']['ID_user'] === null) {
            echo "Your session have expired.";
        }
        else {
            $order = $detailOrder;//json 
            $order = json_decode($order, true);//php
            $date = date("Y-m-d H:i:s");
            $test = $this -> order -> addOrder($date,$_SESSION['user']['ID_user']);
            $idOrder = $this -> order -> getLastOrderId();
            foreach ($order as $detail) {
                $test1 = $this -> order -> addDetail($detail['ID_dish'], $idOrder['ID_order'],$detail['DishName'], $detail['quantity'], $detail['Price']);
            }
            if ($test && $test1) {
                echo "Votre commande a été enregistré";
            }
            else {
                echo "A SQL error has happened";
            }
        }
    }
    public function getAllOrder(): ?array {
        $orderlist = $this -> order -> getOrder();
        return $orderlist;
    }
    public function getAllDetail(): ?array {
        $detaillist = $this -> order -> getDetail();
        return $detaillist;
    }
}
