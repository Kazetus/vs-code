<?php

function nameForm() {
    $name = '';
    if (!empty($_POST['name'])) {
        if (preg_match('/[A-Z]{2}-[0-9]{4}/', $_POST['name'])===1) {
            $name = $_POST['name'];    
        }
        else {
            $name = '';
        }
    } else {
        $name = nameRobot();  
    }
    return $name;
}
function evilForm() {
    $menace = "";
    if (isset($_POST['morale'])) {
        if ($_POST['morale'] == 'destroyer') {
            $menace = "<span class='evil'>Extermination ! Extermination !</span>";
        }
        else if ($_POST['morale'] == 'friend') {
            $menace = "Vous voulez un café ?";
        }
        else {
            $menace = randomDisfunction();
        }
        return $menace;
    }
    else {}
}