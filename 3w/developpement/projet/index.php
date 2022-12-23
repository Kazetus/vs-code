<?php
session_start();

use php\controllers\SecurityController;
use php\controllers\BookingController;
use php\controllers\OrderController;
use php\controllers\UserController;
use php\controllers\ControllerDishs;
use php\controllers\AdminController;

function chargerClasse($classe) {
    $classe=str_replace('\\','/',$classe);
    require $classe.'.php';
}
spl_autoload_register('chargerClasse');

$controllerDishs = new ControllerDishs();
$usercontrol = new UserController();
$booking = new BookingController();
$order = new orderController();
$admin = new AdminController();
if (array_key_exists("action",$_GET)) {
    
    switch($_GET['action']) {
        case 'create_account':
            $usercontrol -> createAccount();
            break;
        case 'login':
            $usercontrol -> logIn();
            break;
        case 'logout':
            $usercontrol -> logOut();
            break;
        case 'book':
            $booking -> createBook();
            break;
        case 'order':
            if(array_key_exists('id',$_GET)) {
                $order -> cmdAjax($_GET['id']);
            }
            elseif (array_key_exists('cart',$_POST)){
                $order -> sendOrder($_POST['cart']);
            }
            else {
                $order -> order();
            }
            break;
        case 'admin':
            if(array_key_exists('content',$_GET)){
                switch($_GET['content']) {
                    case 'dish' :
                        $admin -> addDish();
                    break;
                    case 'edit' :
                        $lists = $controllerDishs -> getAllDish();
                        $admin -> editDish($lists);
                    break;
                    case 'editon' :
                        $controllerDishs -> EditDish();
                    break;
                    case 'delete' :
                        $controllerDishs -> deleteDish();
                    break;
                    case 'reser' :
                        $booked = $booking -> getAllReser();
                        $admin -> displayAllReser($booked);
                    break;
                    case 'command' :
                        $orderlist = $order -> getAllOrder();
                        $detaillist = $order -> getAllDetail();
                        $admin -> displayAllOrder($orderlist,$detaillist);
                    break;
                }
            }
            else {
            $admin -> logAdmin();   
            }
            break;
        case 'adminLogout':
            $admin -> adminLogout();
            break;
        case 'addDish' :
            $controllerDishs -> InsertDish();
            break;
    }
}
else {
    $controllerDishs -> listDish();
}
