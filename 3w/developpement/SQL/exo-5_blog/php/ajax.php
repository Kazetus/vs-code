<?php 
require "../connexion.php";
$query = $connexion -> prepare('
                                SELECT
                                    `commentUser`,
                                    `commentDate`,
                                    `commentText`,
                                    `articleTitle`,
                                    comments.`ID_article`
                                FROM
                                    `comments`
                                INNER JOIN
                                    `articles`
                                ON comments.`ID_article` = articles.`ID_article`
                                ORDER BY
                                    `commentDate` DESC
                                ');
$query -> execute();
$comments = $query -> fetchAll();
echo json_encode($comments);