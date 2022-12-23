<?php
require "connexion.php";

$pseudo='Matthias';
$mdp=password_hash("mai2022", PASSWORD_DEFAULT);

$query = $connexion -> prepare ('
                                INSERT INTO
                                    admin(pseudo, password)
                                VALUES (?,?)
                                ');
$query -> execute([$pseudo,$mdp]);