<?php

require "connexion.php";

$query = $connexion -> prepare('
                                SELECT
                                    `articleText`,
                                    `articleDate`,
                                    `articleTitle`,
                                    `image`,
                                    articles.`ID_author`,
                                    articles.`ID_categorie`,
                                    `authorFirstName`,
                                    `authorLastName`,
                                    `categorieName`,
                                    `ID_article`
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

$template = "accueil";

require "layout.phtml";