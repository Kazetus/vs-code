<?php

require "connexion.php";

if(array_key_exists('id_resa',$_GET) && is_numeric($_GET['id_resa']))
{
    $id = $_GET['id_resa'];

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
                                    `ID_reservation`
                                FROM Client
                                INNER JOIN reservation 
                                ON Client.ID_client = reservation.ID_client
                                WHERE
                                    ID_reservation = ?
                                ');
$query -> execute([$id]);
$detail_voyage = $query -> fetch(); 

require "detail.phtml";