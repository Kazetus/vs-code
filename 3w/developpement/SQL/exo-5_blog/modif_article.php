<?php
session_start();
require "connexion.php";
$image_direct = "img";
if (isset($_SESSION['admin'])) {
    if(isset($_GET['id_modif']) && $_GET['id_modif'] == 'article' || isset($_POST['id_modif']) && $_POST['id_modif'] == 'article' ) {
        if(isset($_POST['title']) && !empty($_POST['title']) && isset($_POST['article']) && !empty($_POST['article'])){
            $id = $_POST['id_article'];
            $image = $_POST['id_image'];
            $title = htmlspecialchars($_POST['title']);
            $article = $_POST['article'];
            $newAuthor = $_POST['author'];
            $newCategorie = $_POST['categorie'];
            if(!empty($_FILES['image']['name'])) {
                unlink("$image_direct/$image");
                $tmp_name = $_FILES['image']['tmp_name'];
                $image = $_FILES['image']['name'];
                move_uploaded_file($tmp_name, "$image_direct/$image");
            }
            else if ($_POST['delete']) {
                unlink("$image_direct/$image");
                $image = "sans image";
            }
            else {}
            $query = $connexion -> prepare('
                                            UPDATE 
                                                `articles` 
                                            SET 
                                                `articleText` = :articleText,
                                                `articleTitle` = :articleTitle,
                                                `image` = :image,
                                                `ID_author` = :ID_author,
                                                `ID_categorie` = :ID_categorie
                                            WHERE
                                                `ID_article` = :ID_article
                                            ');
            $query -> bindParam(':articleText', $article);
            $query -> bindParam(':articleTitle', $title);
            $query -> bindParam(':image', $image);
            $query -> bindParam(':ID_article', $id);
            $query -> bindParam(':ID_author', $newAuthor);
            $query -> bindParam(':ID_categorie', $newCategorie);
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
        else {
            $id = $_GET['id_article'];
            $queryArt = $connexion -> prepare('
                                                SELECT
                                                    `ID_article`,
                                                    `articleText`,
                                                    `articleTitle`,
                                                    `image`,
                                                    `ID_author`,
                                                    `ID_categorie`
                                                FROM
                                                    `articles`
                                                WHERE
                                                    ID_article = ?
                                            ');
            $queryArt -> execute([$id]);
            $articleInfo = $queryArt -> fetch();
            $articleText = $articleInfo['articleText'];
            $articleTitle = $articleInfo['articleTitle'];
            $authorSelected = $articleInfo['ID_author'];
            $categorieSelected = $articleInfo['ID_categorie'];
            $image = $articleInfo['image'];
            $queryAut = $connexion -> prepare ('
                                                SELECT
                                                    `authorFirstName`,
                                                    `authorLastName`,
                                                    `ID_author`
                                                FROM
                                                    `authors`
                                                ');
            $queryAut -> execute();
            $authors = $queryAut -> fetchAll();
            $queryCat = $connexion -> prepare ('
                                                SELECT
                                                    `categorieName`,
                                                    `ID_categorie`
                                                FROM
                                                    `categorie`
                                                ');
            $queryCat -> execute();
            $categories = $queryCat -> fetchAll();
        }
        $template ="modif_article";
        require "layout.phtml";
    }
    else if (isset($_GET['id_modif']) && $_GET['id_modif'] == 'auteur' || isset($_POST['id_modif']) && $_POST['id_modif'] == 'auteur') {
        if(isset($_POST['authorFirstName']) && !empty($_POST['authorFirstName']) && isset($_POST['authorLastName']) && !empty($_POST['authorLastName'])){
            $id = $_POST['id_author'];
            $authorfirstname = htmlspecialchars($_POST['authorFirstName']);
            $authorlastname = htmlspecialchars($_POST['authorLastName']);
            $query = $connexion -> prepare('
                                            UPDATE 
                                                `authors` 
                                            SET 
                                                `authorFirstName` = ?,
                                                `authorLastName` = ?
                                            WHERE
                                                `ID_author` = ?
                                            ');
            $test = $query -> execute([$authorfirstname, $authorlastname, $id]);
            if($test)
            {
                header('location:admin.php');
            }
            else
            {
                echo "<p>Une erreur serveur SQL est survenue</p>";
            }
        }
        else {
            $id = $_GET['id_author'];
            $queryAut = $connexion -> prepare('
                                                SELECT
                                                    `ID_author`,
                                                    `authorFirstName`,
                                                    `authorLastName`
                                                FROM
                                                    `authors`
                                                WHERE
                                                    ID_author = ?
                                            ');
            $queryAut -> execute([$id]);
            $authorInfo = $queryAut -> fetch();
            $authorfirstname = $authorInfo['authorFirstName'];
            $authorlastname = $authorInfo['authorLastName'];
        }
        $template ="modif_article";
        require "layout.phtml";
    }
    else if (isset($_GET['id_modif']) && $_GET['id_modif'] == 'categorie' || isset($_POST['id_modif']) && $_POST['id_modif'] == 'categorie') {
        if(isset($_POST['categorieName']) && !empty($_POST['categorieName'])){
            $id = $_POST['id_categorie'];
            $categoriename = htmlspecialchars($_POST['categorieName']);
            $query = $connexion -> prepare('
                                            UPDATE 
                                                `categorie` 
                                            SET 
                                                `categorieName` = ?
                                            WHERE
                                                `ID_categorie` = ?
                                            ');
            $test = $query -> execute([$categoriename, $id]);
            if($test)
            {
                header('location:admin.php');
            }
            else
            {
                echo "<p>Une erreur serveur SQL est survenue</p>";
            }
        }
        else {
            $id = $_GET['id_categorie'];
            $queryCat = $connexion -> prepare('
                                                SELECT
                                                    `ID_categorie`,
                                                    `categorieName`
                                                FROM
                                                    `categorie`
                                                WHERE
                                                    ID_categorie = ?
                                            ');
            $queryCat -> execute([$id]);
            $categorieInfo = $queryCat -> fetch();
            $categoriename = $categorieInfo['categorieName'];
        }
        $template ="modif_article";
        require "layout.phtml";
    }
}
else {
    header('location:admin.php');
}