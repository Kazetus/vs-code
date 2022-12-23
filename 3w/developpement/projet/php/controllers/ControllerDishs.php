<?php
declare (strict_types=1);

namespace php\controllers;

use php\models\dish\Dish;
use php\controllers\SecurityController;

class ControllerDishs extends SecurityController {
    private $dish;
    
    public function __construct() {
        $this -> dish = new Dish();
    }
    
    public function listDish() {
        $dishs = $this -> dish -> getDishs();
        
        $template = "php/vue/accueil";
        require "php/vue/layout.phtml";
    }
    public function getAllDish(): ?array {
        return $this -> dish -> getDishs();
    }
    public function insertDish() {
        if($this -> isAdmin()) {
            if(isset($_POST['dishName']) && !empty($_POST['dishName']) && isset($_POST['categorie']) && !empty($_POST['categorie']) && isset($_POST['price']) && !empty($_POST['price'])){
                $dishname = htmlspecialchars($_POST['dishName']);
                $categorie = htmlspecialchars($_POST['categorie']);
                $price = $_POST['price'];
                if(!empty($_FILES['image']['name'])) {
                    $image_direct = "img";
                    $tmp_name = $_FILES['image']['tmp_name'];
                    $image = $_FILES['image']['name'];
                    move_uploaded_file($tmp_name, "$image_direct/$image");
                }
                else {
                    $image = "sans image";
                }
                $test = $this -> dish -> addNewDish($dishname,$categorie,$price,$image);
                if($test)
                {
                    header('location:index.php');
                    exit();
                }
                else
                {
                    echo "<p>Une erreur serveur SQL est survenue</p>";
                }
            }
        }
        else {
            header('location:index.php');
        }
    }
    public function EditDish() {
        if($this -> isAdmin()) {
            if(isset($_POST['dishName']) && !empty($_POST['dishName']) && isset($_POST['categorie']) && !empty($_POST['categorie']) && isset($_POST['price']) && !empty($_POST['price'])){
                $dishid = $_POST['id'];
                $dishname = htmlspecialchars($_POST['dishName']);
                $categorie = htmlspecialchars($_POST['categorie']);
                $price = $_POST['price'];
                $photos= $_POST['photos'];
                if(!empty($_FILES['image']['name'])) {
                    $image_direct = "img";
                    unlink("$image_direct/$photos");
                    $tmp_name = $_FILES['image']['tmp_name'];
                    $image = $_FILES['image']['name'];
                    move_uploaded_file($tmp_name, "$image_direct/$image");
                }
                else {
                    $image = $photos;
                }
                $test = $this -> dish -> editADish($dishid,$dishname,$categorie,$price,$image);
                if($test)
                {
                    header('location:index.php');
                    exit();
                }
                else
                {
                    echo "<p>An SQL error happened</p>";
                }
            }
        }
        else {
            header('location:index.php');
        }
    }
    public function deleteDish() {
        if($this -> isAdmin()) {
            if(isset($_GET['id']) && !empty($_GET['id'])) {
                $id= $_GET['id'];
                $test = $this -> dish -> deleteADish($id);
                if($test) {
                    header('location:index.php');
                    exit();
                }
                else {
                    echo "<p>An SQL error happened</p>";
                }
            }
            else {
                echo "<p> Error, no dish have been targeted";
            }
        }
        else {
            header('location:index.php?action=login');
        }
    }
}