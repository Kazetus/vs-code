<?php

session_start();

require "connexion.php";

if(isset($_POST['pseudo']) && !empty($_POST['pseudo']) && isset($_POST['password']) && !empty($_POST['password'])) {
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $mdp = htmlspecialchars($_POST['password']);
    
    $query = $connexion -> prepare("
                                    SELECT
                                        `ID_client`,
                                        `pseudo`,
                                        `mdp`
                                    FROM client
                                    WHERE 
                                        pseudo = ?
                                    ");
    $query -> execute([$pseudo]);
    $clientData = $query -> fetch();
    if ($clientData) {
        if ($mdp == $clientData['mdp']) {
            $_SESSION['client']['pseudo'] = $clientData['pseudo'];
            $_SESSION['client']['password'] = $clientData['mdp'];
            
            header("location: club.php");
        }
        else {
            echo 'mot de passe incorrect';
        }
    }
    else {
        echo 'client inconnu';
    }
}

require "index.phtml";