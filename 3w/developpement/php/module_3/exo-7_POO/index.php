<?php

require "objet/Administrateur.php";

$newlogin =new Administrateur('img/avatar.jpg', 'admin');
var_dump($newlogin);
// echo $newlogin -> avatar;
// echo $newlogin -> login;
$newlogin -> logIn();