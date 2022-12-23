<?php
session_start();
require "connexion.php";
$image_direct = "img";
if (isset($_SESSION['admin'])) {
    if(isset($_GET['id_add']) && $_GET['id_add'] == 'article' || isset($_POST['id_add']) && $_POST['id_add'] == 'article') {
        if(isset($_POST['title']) && !empty($_POST['title']) && isset($_POST['article']) && !empty($_POST['article']) && isset($_POST['author']) && !empty($_POST['author']) &&  isset($_POST['categorie']) && !empty($_POST['categorie'])){
            $name = htmlspecialchars($_POST['title']);
            $article = $_POST['article'];
            $author = $_POST['author'];
            $categorie = $_POST['categorie'];
            if(!empty($_FILES['image']['name'])) {
                $tmp_name = $_FILES['image']['tmp_name'];
                $image = $_FILES['image']['name'];
                move_uploaded_file($tmp_name, "$image_direct/$image");
            }
            else {
                $image = "sans image";
            }
            $query = $connexion -> prepare('
                                            INSERT INTO articles (
                                                `articleTitle`,
                                                `articleText`,
                                                `ID_author`,
                                                `ID_categorie`,
                                                `image`,
                                                `articleDate`
                                                )
                                            VALUES (
                                                :articleTitle,
                                                :articleText,
                                                :ID_author,
                                                :ID_categorie,
                                                :image,
                                                now()
                                                )
                                            ');
            $query -> bindParam(':articleTitle', $name);
            $query -> bindParam(':articleText', $article);
            $query -> bindParam(':ID_author', $author);
            $query -> bindParam(':ID_categorie', $categorie);
            $query -> bindParam(':image', $image);
            $test = $query -> execute();
            
            if($test)
            {
                header('location:admin.php');
            }
            else
            {
                echo "<p>Une erreur serveur SQL est survenue</p>";
            }
    
        }
        else 
        {
            $queryAut = $connexion -> prepare('
                                            SELECT
                                                `ID_author`,
                                                `authorFirstName`
                                            FROM
                                                authors
                                            ');
            $queryAut -> execute();
            $authors = $queryAut -> fetchAll();
            
            $queryCat = $connexion -> prepare('
                                            SELECT
                                                `ID_categorie`,
                                                `categorieName`
                                            FROM
                                                categorie
                                            ');
            $queryCat -> execute();
            $categories = $queryCat -> fetchAll();
            
            $template = "ajout_article";
            require "layout.phtml";
        }
    }
    else if (isset($_GET['id_add']) && $_GET['id_add'] == 'auteur' || isset($_POST['id_add']) && $_POST['id_add'] == 'auteur') {
        if(isset($_POST['firstName']) && !empty($_POST['firstName']) && isset($_POST['lastName']) && !empty($_POST['lastName'])) {
            $firstname = htmlspecialchars($_POST['firstName']);
            $lastname = htmlspecialchars($_POST['lastName']);
            $query = $connexion -> prepare('
                                            INSERT INTO authors (
                                            `authorFirstName`,
                                            `authorLastName`
                                            )
                                            VALUES (
                                            ?,
                                            ?
                                            )
                                            ');
            $test = $query -> execute([$firstname,$lastname]);
            if($test) {
                header('location:admin.php');
            }
            else {
                echo "<p>Une erreur serveur SQL est survenue</p>";
            }
        }
        else 
        {
            $template = "ajout_article";
            require "layout.phtml";
        }
    }
    else if (isset($_GET['id_add']) && $_GET['id_add'] == 'categorie' || isset($_POST['id_add']) && $_POST['id_add'] == 'categorie') {
        if(isset($_POST['categorieName']) && !empty($_POST['categorieName'])) {
            $categorie = htmlspecialchars($_POST['categorieName']);
            $query = $connexion -> prepare('
                                            INSERT INTO categorie (
                                            `categorieName`
                                            )
                                            VALUES (
                                            ?
                                            )
                                            ');
            $test = $query -> execute([$categorie]);
            if($test) {
                header('location:admin.php');
            }
            else {
                echo "<p>Une erreur serveur SQL est survenue</p>";
            }
        }
        else 
        {
            $template = "ajout_article";
            require "layout.phtml";
        }
    }
}
else {
    header('location:admin.php');
}