<?php
declare(strict_types=1);

namespace php\controllers;

use php\models\admin\Admin;
use php\controllers\SecurityController;

class AdminController extends SecurityController{
    private $admin;
    
    public function __construct() {
        $this -> admin = new Admin();
    }
    public function logAdmin() {
        $template = "php/vue/admin/Admin";
         if (isset($_POST['pseudo']) && !empty($_POST['pseudo']) && isset($_POST['pass']) && !empty($_POST['pass'])) {
            $check = $this -> admin -> getAdminByPseudo($_POST['pseudo']);
            if($check) {
                if (password_verify($_POST['pass'], $check['password'])) {
                    $_SESSION['admin'] = $check;
                    header('location:index.php?action=admin');
                }
                else {
                    echo "Invalid password.";
                }
            }
            else {
                $message = "No admin in database with this pseudo.";
            }
        }
        require "php/vue/layout.phtml";
    }
    public function adminLogout() {
        if(isset($_SESSION['admin'])) {
            $_SESSION['admin'] = null;
        }
        session_destroy();
        header('location:index.php');
    }
    public function addDish() {
        if($this -> isAdmin()) {
            $template = "php/vue/admin/addDish";
            require "php/vue/layout.phtml";
        }
        else {
            header('location:index.php');
        }
    }
    public function editDish($lists) {
        if($this -> isAdmin()) {
            $listdishs = $lists;
            $template = "php/vue/admin/editDish";
            require "php/vue/layout.phtml";
        }
        else {
            header('location:index.php');
        }
    }
    public function displayAllreser($booked) {
        $books = $booked;
        if($this -> isAdmin()) {
            $template = 'php/vue/admin/Book';
            require "php/vue/layout.phtml";
        }
        else {
            header('location:index.php');
        }
    }
    public function displayAllOrder($orderlist,$detaillist) {
        $orders = $orderlist;
        $details = $detaillist;
        if($this -> isAdmin()) {
            $template = 'php/vue/admin/Order';
            require "php/vue/layout.phtml";
        }
        else {
            header('location:index.php');
        }
    }
}