<?php
require "../connexion/connexion.php";
$query = $connexion -> prepare('
                                SELECT
                                    `content`
                                FROM
                                    `html`
                                ');
$query -> execute();
$html = $query -> fetch();
require "html.phtml";