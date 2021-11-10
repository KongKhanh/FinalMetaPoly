<?php

class NewsfeedController{
    
    private $NewsfeedObj;

    function __construct(){
        require_once('./app/Models/readSide/Newsfeed/NewsfeedMd.php');
        $this->NewsfeedObj = new Newsfeed();
    }

    public function __getIdPost(){
        $idPost = $this->NewsfeedObj->getPostId();
        echo json_encode($idPost);
    }
}
?>