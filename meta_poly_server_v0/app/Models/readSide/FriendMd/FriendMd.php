<?php
    //Mai Mai
    class FriendMd {

        public function getListFriend($idUser){
            require_once('./app/Models/initialConnect/connectDatabase.php');

            // $sql= "SELECT users.user_name, users.user_id, friends_box.fb_fk_user_req_id, friends_box.fb_id, friends_box.fb_active FROM friends_box 
            // INNER JOIN users ON friends_box.fb_fk_user_comf_id = users.user_id
            // WHERE fb_active = 1 AND fb_fk_user_req_id = $idUser";
            
            $sql ="SELECT * FROM friends_box WHERE fb_active = 1 AND fb_fk_user_req_id = $idUser OR fb_fk_user_comf_id = $idUser";

            $stmt = $conn ->prepare($sql);

            $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $stmt->execute();

            $result = $stmt->FetchAll(); // $result là giá trị trả về của biến $sql chứa thông tin 2 chiều của bảng FB 
            
            $uwl = []; // chứa id của tất cả bảng bạn bè ở bảng friends_box có Fb_active == 1
       
            foreach($result as $friendItem) {
                if($friendItem['fb_fk_user_comf_id'] == $idUser ){
                    array_push($uwl, $friendItem['fb_fk_user_req_id']);
                } 
                if($friendItem['fb_fk_user_req_id'] == $idUser ){
                    array_push($uwl, $friendItem['fb_fk_user_comf_id']);
                }    
            }
            
            $lfk = []; // list of friend

            foreach ($uwl as $uwlI) {

                $sql= "SELECT * FROM users WHERE user_id = $uwlI";

                $stmt = $conn ->prepare($sql);

                $stmt->setFetchMode(PDO::FETCH_ASSOC);
    
                $stmt->execute();
    
                $r = $stmt->fetch();

                array_push($lfk, $r);

            }
               
            return $lfk;
        }


    }
