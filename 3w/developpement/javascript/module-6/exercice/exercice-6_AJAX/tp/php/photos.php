<?php
require "../connexion/connexion.php";
$query = $connexion -> prepare('
                                SELECT
                                    `name`,
                                    `adresse`
                                FROM
                                    `photo`
                                ');
$query -> execute();
$photos = $query -> fetchAll();
require "photos.phtml";