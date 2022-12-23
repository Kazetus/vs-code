<?php
class Administrateur
{
    protected $avatar;
    protected $login;
    public function __construct($avatar, $login) {
        $this -> avatar = $avatar;
        $this -> login = $login;
    }
    public function logIn(){
        echo $this -> avatar;
        echo $this -> login;
    }
}