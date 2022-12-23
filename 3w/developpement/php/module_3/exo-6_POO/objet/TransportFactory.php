<?php

class TransportFactory{
    public static function factory($type, $marque){
        switch($type) {
            case 1 :
                return new Car($marque);
            break;
            case 2 :
                return new MotorBike($marque);
            break;
            default:
                return false;
        }
    }
}