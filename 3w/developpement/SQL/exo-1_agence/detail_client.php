<?php

require "connexion.php";

if(array_key_exists('id_client',$_GET) && is_numeric($_GET['id_client']))
{
    $id = $_GET['id_client'];

}

$query = $connexion -> prepare('
                                SELECT
                                    `nom`,
                                    `prenom`,
                                    `tel`,
                                    `mail`,
                                    `Avion`,
                                    `classVol`,
                                    `Destination`,
                                    `Heure`,
                                    `N_vol`,
                                    `ID_reservation`,
                                    Client.`ID_client`
                                FROM Client
                                INNER JOIN reservation 
                                ON Client.ID_client = reservation.ID_client
                                WHERE
                                    Client.ID_client = ?
                                ');
$query -> execute([$id]);
$detail_clients = $query -> fetchAll();
// var_dump($detail_clients);
// $clients = $query -> fetch();
// var_dump($clients);
require "detail_client.phtml";