<?php
declare(strict_types=1);

namespace php\controllers;

use php\models\booking\Booking;
use php\controllers\SecurityController;

class BookingController extends SecurityController{
    private $book;
    
    public function __construct() {
        $this -> book = new Booking();
    }
    
    public function createBook():void
    {
        if ($this -> isConnect()) {
            $template = 'php/vue/booking/booking';
            if(isset($_POST['date']) && !empty($_POST['date']) && isset($_POST['hours']) && !empty($_POST['hours']) && isset($_POST['seats']) && !empty($_POST['seats'])) {
                $date = $_POST['date']." ".$_POST['hours'];
                $special = htmlspecialchars($_POST['special']);
                $test = $this -> book -> insertBook($date,$_POST['seats'],$_POST['special'],$_SESSION['user']['ID_user']);
                if($test) {
                    $message = "Your booking is saved !";
                    header('location:index.php?action=book&message='.$message);
                }
                else {
                    $message = "A SQL error has happened";
                }
            }
            else {
                
            }
            require "php/vue/layout.phtml";
        }
        else {
            header ('location:index.php?action=login');
        }
    }
    public function getAllReser() {
        $books = $this -> book -> getReser();
        return $books;
    }
}