<?php

require "objet/Car.php";
require "objet/motorBike.php";
require "objet/TransportFactory.php";
$voiture = 'TransportFactory';
$peugeot = $voiture::Factory(1,'Peugeot');
var_dump($peugeot);
$moto = 'TransportFactory';
$kawazaki = $moto::Factory(2,'Kawazaki');
var_dump($kawazaki);
$false = 'TransportFactory';
$nottrue = $false::Factory(3,'subaru');
var_dump($nottrue);