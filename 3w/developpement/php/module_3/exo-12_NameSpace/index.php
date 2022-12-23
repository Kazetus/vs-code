<?php

require "app/Ville.php";
require "app2/Ville.php";

use app\Ville;
use app2\Ville as Ville2;

$ville =new Ville('Paris');
echo $ville."<br/>";

$ville2=new Ville2('Nice', 338998);
echo $ville2."<br/>";