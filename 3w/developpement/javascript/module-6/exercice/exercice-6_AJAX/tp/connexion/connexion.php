<?php

// A- lancer la connexion vers la BDD 

// création des constantes 
define("SERVEUR","db.3wa.io");
define("USER","matthiasmunoz");
define("MDP","c8f9691e444b03d5ca74d7c7badcc806");
define('BDD',"matthiasmunoz_ajax");

try
{
    $connexion = new PDO("mysql:host=".SERVEUR.";dbname=".BDD,USER,MDP);
    $connexion -> exec("SET CHARACTER SET utf8");

}
catch(Exception $message)
{
    echo ' une erreur au moment de la connexion BDD : '.$message->getMessage();
}

