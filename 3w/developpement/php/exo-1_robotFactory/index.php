<?php
date_default_timezone_set('europe/paris');

$letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
$name = "";
$number = rand(0,10);
$pair = "";
$menace = "";
$subNumber = rand(1, 1000);
$robotNumber = 0;
$robotNumber2 = rand(1, 1000);
$date = date('d m Y');
$hours = date('H:i:s');
function nameRobot($x, $y) {
    for($i=0;$i<2;++$i) {
        $x = $x.$y[rand(0,25)];
    }
    $x = $x.'-';
    for($i=0;$i<4;++$i){
        $x= $x.rand(0,9);
    }
    return $x;
}
function generateEvenOdd($x, $y) {
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
function randomDisfunction($x) {
    $y = rand(1,3);
    switch ($y) {
        case 1:
            $x = "vous voulez un café ?";
        case 2: 
            $x = "Vous voulez un café ?";
            break;
        default:
            $x = "Extermination ! Extermination !";
    }
    return $x;
}
function foundSubNumber($x,$y) {
    for ($i=1;$i<$y;++$i) {
    }
    $x = $i;
    return $x;
}
function foundSubNumberDychotomically($x, $y) {
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
$name = nameRobot($name, $letter);
$pair = generateEvenOdd($pair, $number);
$menace = randomDisfunction($menace);
$robotNumber = foundSubNumber($robotNumber, $subNumber);
$robotNumber2 = foundSubNumberDychotomically($robotNumber2, $subNumber);
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Robot factory</title>
</head>
<body>
    <?= 'Salut, humain. Je suis '.$name.' .' ?>
    <?= '<br>' ?>
    <?= 'Nous sommes le '.$date.', il est '.$hours.'.'?>
    <?= '<br>' ?>
    <?= 'J\' ai choisi le nombre '.$number.'. C\'est un nombre '.$pair.'.' ?>
    <?= '<br>' ?>
    <?= ' Mon nom à l\'envers s\'écrit '.strrev($name).' . Ah. Ah. Ah.' ?>
    <?= '<br>' ?>
    <?= $menace ?>
    <?= '<br>' ?>
    <?= 'Le subconscient du robot a choisi : '.$subNumber ?>
    <?= '<br>' ?>
    <?= 'J\'ai trouvé, le numéro était : '.$robotNumber ?>
    <?= '<br>' ?>
    <?= 'J\'ai trouvé, le numéro était : '.$robotNumber2 ?>
</body>
</html>