<?php 
    class NotifacationMD{

        public function GetComfirmUserID($idUser){

            if(isset($idUser)) {

                require('./app/Models/initialConnect/connectDatabase.php');
            
                //Thiếu user_avatar
                $sql = "SELECT friends_box.fb_id, friends_box.fb_fk_user_req_id, friends_box.fb_fk_user_comf_id, friends_box.fb_active, users.user_name FROM friends_box
                INNER JOIN users ON friends_box.fb_fk_user_req_id = users.user_id
                WHERE fb_active = 0 AND fb_fk_user_comf_id = $idUser";
        
                $stmt = $conn->prepare($sql);
        
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
        
                $stmt->execute(); 
        
                return $result = $stmt->fetchAll();
            }

            else {
                
                return [];
            }
        }
    
    }
?>