<?php
    //Mai Mai
    class FriendMd {

        public function getListFriend($idUser){
            require_once('./app/Models/initialConnect/connectDatabase.php');

            $sql= "SELECT * FROM friends_box 
            INNER JOIN users ON friends_box.fb_fk_user_comf_id = users.user_id
            WHERE fb_active = 1 AND fb_fk_user_req_id = $idUser";

            $stmt = $conn ->prepare($sql);

            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $stmt->execute();

            return $result = $stmt->FetchAll();

            // $FriendList = $this->NewsfeedMdObj->getListFriend();
        
        }


    }
