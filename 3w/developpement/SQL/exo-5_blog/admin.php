<?php
session_start();
require "connexion.php";
if(!empty($_POST))
{
    if (isset($_POST['pseudo']) && !empty($_POST['pseudo'])) {
        $saisiPseudo = $_POST['pseudo'];
        $saisiMdp = $_POST['password'];
        $query = $connexion -> prepare('
                                        SELECT
                                            `pseudo`,
                                            `password`
                                        FROM
                                            `admin`
                                        WHERE
                                            `pseudo` = ?
                                        ');
        $query -> execute([$saisiPseudo]);
        $login = $query -> fetch();
        if($login) {
            if (password_verify($saisiMdp, $login['password'])) {
                $_SESSION['admin'] = $saisiPseudo;
            }
            else {
                echo "le mot de passe saisi est invalide.";
            }
        }
        else {
            echo "Le nom d'utilisateur est inconnu";
        }
    }
    else {
        echo "Un nom d'utilisateur doit être saisi.";
    }
}
$query = $connexion -> prepare('
                                SELECT 
                                    `ID_article`,
                                    `articleTitle`,
                                    `articleText`,
                                    `authorFirstName`,
                                    `categorieName`
                                FROM
                                    articles
                                INNER JOIN
                                    authors
                                ON articles.ID_author = authors.ID_author
                                INNER JOIN
                                    categorie
                                ON articles.ID_categorie = categorie.ID_categorie
                                ORDER BY
                                    articleDate DESC
                                ');
$query -> execute();
$articles = $query -> fetchAll();
$query = $connexion -> prepare('
                                SELECT 
                                    `authorFirstName`,
                                    `authorLastName`,
                                    `ID_author`
                                FROM
                                    `authors`
                                ');
$query -> execute();
$authors = $query -> fetchAll();
$query = $connexion -> prepare('
                                SELECT 
                                    `categorieName`,
                                    `ID_categorie`
                                FROM
                                    `categorie`
                                ');
$query -> execute();
$categories = $query -> fetchAll();
$template = "admin";

require "layout.phtml";