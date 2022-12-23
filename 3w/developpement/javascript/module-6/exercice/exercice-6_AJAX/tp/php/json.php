<?php
require "../connexion/connexion.php";
$query = $connexion -> prepare ('
                                SELECT 
                                    `marque`,
                                    `modele`,
                                    `annee`
                                FROM
                                    `voiture`
                                ');
$query -> execute();
$voitures = $query -> fetchAll();
echo json_encode($voitures);