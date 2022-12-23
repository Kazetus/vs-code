<?php
if(isset($_GET['page'])){
 if(ctype_digit($_GET['page'])){
 echo "Bonjour Toto";
 }
 else{
 echo "Bonjour".$_GET['page'];
 }
 }
 else{
 echo 'Bonjour';
 }
?>