<?php
date_default_timezone_set('europe/paris');

require 'robot_function.php';
require 'generic_function.php';
$name = nameForm();
$number = rand(0,10);
$pair = generateEvenOdd($number);
$menace = evilForm();
$subNumber = rand(1, 1000);
$robotNumber = foundSubNumber($subNumber);
$date = date('d m Y');
$hours = date('H:i:s');

require 'layout.phtml';
var_dump($_POST);