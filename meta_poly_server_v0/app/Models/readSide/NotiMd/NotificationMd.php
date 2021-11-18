<?php 
    class NotifacationMD{

        public function GetComfirmUserID($idUser){

            require('./app/Models/initialConnect/connectDatabase.php');
            
            //Thiếu user_avatar
            $slq = "SELECT friends_box.fb_id, friends_box.fb_fk_user_req_id, friends_box.fb_fk_user_comf_id, friends_box.fb_active, users.user_name FROM friends_box
            INNER JOIN users ON friends_box.fb_fk_user_req_id = users.user_id
            WHERE fb_active = 0 AND fb_fk_user_comf_id = $idUser";
    
            $stmt = $conn->prepare($slq);
    
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
    
            $stmt->execute(); 
    
            return $result = $stmt->fetchAll();
           
        }
    
    }
?>