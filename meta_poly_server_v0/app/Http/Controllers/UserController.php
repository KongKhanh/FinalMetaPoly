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

    // @Author: @VoVanHau
    public function __CreateNewUser() {

        try {
            require_once('./Helpers/php/Random.php');

            $blockInfoUser = [
                'user_name' => isset($_POST['user_name']) ? base64_encode(trim(strip_tags($_POST['user_name']))) : null,
                'user_phone' => isset($_POST['user_phone']) ? base64_encode(trim(strip_tags($_POST['user_phone']))) : null,
                'user_email' => isset($_POST['user_email']) ? base64_encode(trim(strip_tags($_POST['user_email']))) : null,
                'user_password' => isset($_POST['user_password']) ? base64_encode(trim(strip_tags($_POST['user_password']))) : null,
                'user_token' => base64_encode(Random::generateRandomString(50)),
            ];
    
            require_once('./app/Models/writeSide/UserMd/wUserMd.php');
    
            $wUserMd_Obj = new wUserMd();
    
            $recordID = $wUserMd_Obj->_insertNewUser($blockInfoUser);
    
            echo json_encode([
                'status_task' => 1,
                'message_task' => 'successful',
                'recordID' => $recordID,
            ]);
        }
        catch(Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }

    }

    // @Author: @VoVanHau
    public function __authUsingUser() {

        try {

            $blockInfoUser = [
                'user_phone' => isset($_POST['user_phone']) ? base64_encode(trim(strip_tags($_POST['user_phone']))) : null,
                'user_password' => isset($_POST['user_password']) ? base64_encode(trim(strip_tags($_POST['user_password']))) : null,
            ];

            $authStatus = $this->modelUserObj->__authUser($blockInfoUser);

            $authStatus['user_id'] = base64_encode($authStatus['user_id']);

            if($authStatus) {
                echo json_encode([
                    'status_task' => 1,
                    'message_task' => 'successful',
                    'user_info' => $authStatus
                ]);
            } 
            else {
                echo json_encode([
                    'status_task' => 2,
                    'message_task' => 'failed',
                ]);
            }
        }
        catch(Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }

    }
}
?>