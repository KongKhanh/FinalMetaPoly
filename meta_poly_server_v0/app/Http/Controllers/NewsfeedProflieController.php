<?php 
    class NewsfeedProflieController{

        private $NewsfeedProfileMdObj;

        function __construct(){
    
            require('./app/Models/readSide/NewsfeedProfile/NewsfeedProfileMd.php');
    
            $this->NewsfeedProfileMdObj = new NewsfeedProfileMd();
    
        }

        public function __getPostProfileList($idUser){
            $NewsfeedProfileList = $this->NewsfeedProfileMdObj
            ->getNewsFeedProfile(base64_decode($idUser));
            return $NewsfeedProfileList;
        }
    }

?>
