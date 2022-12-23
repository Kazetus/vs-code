<?php
require "connexion.php";

if(array_key_exists('id_article',$_POST) && is_numeric($_POST['id_article']))
{
    $id = $_POST['id_article'];
    if (isset($_POST['pseudo']) && !empty($_POST['pseudo']) && isset($_POST['comment']) && !empty($_POST['comment'])) {
        $pseudo = htmlspecialchars($_POST['pseudo']);
        $comment = htmlspecialchars($_POST['comment']);
        $query = $connexion -> prepare('
                                    INSERT INTO comments (
                                        `commentUser`,
                                        `commentText`,
                                        `ID_article`,
                                        `commentDate`
                                        )
                                    VALUES (
                                        :commentUser,
                                        :commentText,
                                        :ID_article,
                                        now()
                                        )
                                    ');
        $query -> bindParam(':commentUser', $pseudo);
        $query -> bindParam(':commentText', $comment);
        $query -> bindParam(':ID_article', $id);
        $query -> execute();
    }
    else {}
    header('location:article.php?id_article='.$id);
}
else {
    header('location:accueil.php');
}
