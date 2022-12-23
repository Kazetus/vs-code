<?php
require "objet/Pizza.php";

$margarita =new Pizza();
var_dump($margarita);
$margarita -> price = 12;
var_dump($margarita);
echo $margarita -> price;