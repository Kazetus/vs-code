<?php
session_start();
require "connexion.php";
if (isset($_SESSION['admin'])) {
    if(isset($_GET['id_modif']) && $_GET['id_modif'] == 'article') {
        $id=$_GET['id_article'];
        $query = $connexion -> prepare ('
                                        SELECT
                                            `image`
                                        FROM 
                                            `articles`
                                        WHERE
                                            ID_article = ?
                                        ');
        $query -> execute([$id]);
        $getImage = $query -> fetch();
        $image = $getImage['image'];
        unlink("img/$image");
        $query = $connexion -> prepare ('
                                        DELETE FROM 
                                            `articles`
                                        WHERE
                                            ID_article = ?
                                        ');
        $query -> execute([$id]);
        header('location:admin.php');
    }
    elseif(isset($_GET['id_modif']) && $_GET['id_modif'] == 'auteur') {
        $id=$_GET['id_author'];
        $query = $connexion -> prepare ('
                                        DELETE FROM 
                                            `authors`
                                        WHERE
                                            ID_author = ?
                                        ');
        $query -> execute([$id]);
        header('location:admin.php');
    }
    elseif(isset($_GET['id_modif']) && $_GET['id_modif'] == 'categorie') {
        $id=$_GET['id_categorie'];
        $query = $connexion -> prepare ('
                                        DELETE FROM 
                                            `categorie`
                                        WHERE
                                            ID_categorie = ?
                                        ');
        $query -> execute([$id]);
        header('location:admin.php');
    }
    else {
        header('location:admin.php');
    }
}
else {
    header('location:admin.php');
}