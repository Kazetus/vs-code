<?php

session_start();

if (isset($_SESSION['client'])) {
    echo "<strong>Bienvenue au club live 73</strong>";
    echo "<a href=\"deconnexion.php\">Déconnexion</a>";
}
else {
    header("location:index.php");
}