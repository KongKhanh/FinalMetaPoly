<?php 
    class NewsfeedProflieController{

        private $NewsfeedProfileMdObj;

        function __construct(){
    
            require_once('./app/Models/readSide/NewsfeedProfile/NewsfeedProfileMd.php');
    
            $this->NewsfeedProfileMdObj = new NewsfeedProfileMd();
    
        }

        public function __getPostProfileList($idUser){
            $NewsfeedProfileList = $this->NewsfeedProfileMdObj->getNewsFeedProfile(($idUser));
            echo json_encode($NewsfeedProfileList);
            }
    }

?>
