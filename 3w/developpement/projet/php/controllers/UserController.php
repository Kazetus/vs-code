<?php
declare(strict_types=1);

namespace php\controllers;

use php\models\user\User;
use php\controllers\SecurityController;

class UserController extends SecurityController {
    private $users;
    
    public function __construct() {
        $this -> users = new User();
    }
    
    public function createAccount(){
        $template = "php/vue/user/register";
        
        if (isset($_POST['lastName']) && !empty($_POST['lastName']) && isset($_POST['firstName']) && !empty($_POST['firstName']) && isset($_POST['adresse']) && !empty($_POST['adresse']) && isset($_POST['postal']) && !empty($_POST['postal']) && isset($_POST['city']) && !empty($_POST['city']) && isset($_POST['phone']) && !empty($_POST['phone']) && isset($_POST['password']) && !empty($_POST['password']) && isset($_POST['mail']) && !empty($_POST['mail'])) {
            $mdp=password_hash($_POST['password'], PASSWORD_DEFAULT);
            $mailcheck = $this -> users -> getUserByEmail($_POST['mail']);
            if($mailcheck != false) {
                $message = "An user is already registered with this email adress.";
            }
            else {
                $test = $this -> users -> addUser(
                                        htmlspecialchars($_POST['lastName']),
                                        htmlspecialchars($_POST['firstName']),
                                        htmlspecialchars($_POST['adresse']),
                                        htmlspecialchars($_POST['postal']),
                                        htmlspecialchars($_POST['city']),
                                        htmlspecialchars($_POST['phone']),
                                        $mdp,
                                        htmlspecialchars($_POST['mail'])
                                        );
                if($test) {
                    $message = "You've been registered !";
                    header('location:index.php?action=login&message='.$message);
                }
                else {
                    $message = "A SQL error has happened";
                }
            }
        }
        elseif (array_key_exists('lastName',$_POST)) {
            if (empty($_POST['lastName'])) {
                $message = "<p>Please enter your last Name.</p>";
            }
            else if (empty($_POST['firstName'])) {
                $message = "<p>Please enter your first Name.</p>";
            }
            else if (empty($_POST['adresse'])) {
                $message = "<p>Please enter your adress.</p>";
            }
            else if (empty($_POST['postal'])) {
                $message = "<p>Please enter your postal Code.</p>";
            }
            else if (empty($_POST['city'])) {
                $message = "<p>Please enter your city.</p>";
            }
            else if (empty($_POST['phone'])) {
                $message = "<p>Please enter your phone number.</p>";
            }
            else if (empty($_POST['password'])) {
                $message = "<p>Please enter your password.</p>";
            }
            else if (empty($_POST['mail'])) {
                $message = "<p>Please enter your email adresse.</p>";
            }
        }
        else {
            
        }    
        require "php/vue/layout.phtml";
    }
    public function logIn(){
        $template = "php/vue/user/login";
        if (isset($_POST['mail']) && !empty($_POST['mail']) && isset($_POST['password']) && !empty($_POST['password'])) {
            $check = $this -> users -> getUserByEmail($_POST['mail']);
            if($check) {
                if (password_verify($_POST['password'], $check['password'])) {
                    $_SESSION['user'] = $check;
                    header('location:index.php');
                }
                else {
                    echo "Invalid password.";
                }
            }
            else {
                $message = "No user in database with this email adress.";
            }
        }
        else {
            
        }
        require "php/vue/layout.phtml";
    }
    public function logOut(){
        if(isset($_SESSION['user'])) {
            $_SESSION['user'] = null;
        }
        session_destroy();
        header('location:index.php?action=login');
    }
    public function is_connect() {
        if (isset($_SESSION['user'])) {
            return true;
        }
        else {
            return false;
        }
    }
}