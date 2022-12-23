<?php 
function nameRobot() {
    $letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    $x = "";
    for($i=0;$i<2;++$i) {
        $x = $x.$letter[rand(0,25)];
    }
    $x = $x.'-';
    for($i=0;$i<4;++$i){
        $x= $x.rand(0,9);
    }
    return $x;
}
function generateEvenOdd($y) {
    $x = "";
    $z = $y % 2;
    switch ($z) {
        case 0:
            $x = "pair";
            break;
        default:
            $x = "impair";
    }
    return $x;
}
function randomDisfunction() {
    $x = "";
    $y = rand(1,3);
    switch ($y) {
        case 1:
            $x = "vous voulez un café ?";
        case 2: 
            $x = "Vous voulez un café ?";
            break;
        default:
            $x = "<span class='evil'>Extermination ! Extermination !</span>";
    }
    return $x;
}
function foundSubNumber($y) {
    $x = rand(1, 1000);
    $m = 1;
    $p = 1000;
    while($x !== $y) {
        switch($x <=> $y) {
            case -1 :
                $m = $x;
                $x = rand($m, $p);
            break;
            case 1 :
                $p = $x;
                $x = rand($m, $p);
            break;
            default:
        }
    }
    return $x;
}