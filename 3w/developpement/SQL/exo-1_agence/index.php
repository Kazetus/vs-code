<?php

require "connexion.php";

$query = $connexion -> prepare('
                                SELECT
                                    `ID_reservation`,
                                    `N_vol`,
                                    `Heure`,
                                    `Destination`,
                                    `nom`,
                                    `prenom`,
                                    Client.`ID_client`
                                FROM
                                    reservation
                                INNER JOIN
                                    Client
                                ON reservation.ID_client = Client.ID_client'
                                );
$query -> execute();
$reservations = $query -> fetchAll();
require "index.phtml";