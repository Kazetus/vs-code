<?php

require "objet/Personne.php";

$matthias =new Personne('Matthias', 'Munoz', 'Nice');
var_dump($matthias);
echo $matthias -> getPersonne();
$matthias -> setAdresse('Buis');
echo $matthias -> getPersonne();