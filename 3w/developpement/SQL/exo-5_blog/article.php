<?php
require "connexion.php";
if(array_key_exists('id_article',$_GET) && is_numeric($_GET['id_article']))
{
    $id = $_GET['id_article'];
}
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
                                WHERE
                                    ID_article = ?
                                ');
$query -> execute([$id]);
$articles = $query -> fetch();
$queryComs = $connexion -> prepare('
                                    SELECT
                                        `ID_article`,
                                        `commentUser`,
                                        `commentText`,
                                        `commentDate`
                                    FROM
                                        comments
                                    WHERE
                                        `ID_article` = ?
                                    ORDER BY
                                        `commentDate` DESC
                                    ');
$queryComs -> execute([$id]);
$comments = $queryComs -> fetchAll();
$template = "article";
require "layout.phtml";