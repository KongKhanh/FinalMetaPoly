<?php

class UserController{
    
    private $modelUserObj;

    function __construct(){
        require_once('./app/Models/readSide/UserMd/UserMd.php');
        $this->modelUserObj = new UserMd();
    }

    public function __getIdUser($idUser){
        $idUser = $this->modelUserObj->getIdUser($idUser);
        echo json_encode($idUser);
    }
}
?>