<?php
session_start();
// session admin 
if(isset($_SESSION['admin'])) {
    $_SESSION['admin'] = null;
}
//vider la variable de session 
session_destroy();
header('location:admin.php');