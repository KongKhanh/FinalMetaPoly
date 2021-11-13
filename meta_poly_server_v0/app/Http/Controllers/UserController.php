<?php

class UserController{
    
    private $modelUserObj;
    
    // @Author: @KongKhanh
    function __construct(){
        require('./app/Models/readSide/UserMd/UserMd.php');

        $this->modelUserObj = new UserMd();
    }

    public function __getIdUser($idUser){

        require('./app/Http/Controllers/NewsfeedProflieController.php');

        $NewsfeedControllerObj = new NewsfeedProflieController();
        $UserPostListById = $NewsfeedControllerObj -> __getPostProfileList($idUser);

        $UserInfor = $this->modelUserObj->getIdUser(base64_decode($idUser));
        $UserInfor['user_name'] = base64_decode($UserInfor['user_name']);
        $UserInfor['user_phone'] = base64_decode($UserInfor['user_phone']);
        $UserInfor['user_email'] = base64_decode($UserInfor['user_email']);
        $UserInfor['post_list_by_user_id'] =  $UserPostListById;
        echo json_encode($UserInfor);

        $idUser = $this->modelUserObj->getIdUser(base64_decode($idUser));
        $idUser['user_name'] = base64_decode($idUser['user_name']);
        $idUser['user_phone'] = base64_decode($idUser['user_phone']);
        $idUser['user_email'] = base64_decode($idUser['user_email']);
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
                'status_task' =>  1,
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

    //@Author: @KongKhanh
    public function __setProfileSetting($idUser){
        try{
            require('./app/Models/writeSide/UserMd/wUserMd.php');
            $blockUserSetting = [

                'user_name' => isset($_POST['user_name']) ? trim(strip_tags(base64_encode($_POST['user_name']))) : '',

                'user_email' => isset($_POST['user_email']) ? trim(strip_tags(base64_encode($_POST['user_email']))) : '',

                'user_gender' => isset($_POST['user_gender']) ? trim(strip_tags($_POST['user_gender'])) : '',
            ];
            $wUserMdObj = new wUserMd();
            $idUser = base64_decode($idUser);
            $x = $wUserMdObj-> setProfileSetting($blockUserSetting,$idUser);
            echo json_encode([
                'status_task' =>  $x,
                'message_task' => 'successful',
            ]);
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