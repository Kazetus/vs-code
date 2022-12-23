<?php
require "../connexion.php";
if(array_key_exists('search',$_GET))
{
    $search = $_GET['search'];
}
//$search = "Nice";
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
                                    articleTitle LIKE ?
                                ORDER BY
                                    articleDate DESC
                                ');
$query -> execute([$search.'%']);
$articles = $query -> fetchAll();
//var_dump($articles);
echo json_encode($articles);