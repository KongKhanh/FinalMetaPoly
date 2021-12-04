<?php

class UserController {

    private $modelUserObj;

    // @Author: @KongKhanh
    function __construct(){

        require('./app/Models/readSide/UserMd/UserMd.php');

        $this->modelUserObj = new UserMd();
    }

    public function __getIdUser($idUser) {

        require('./app/Http/Controllers/NewsfeedProflieController.php');

        $NewsfeedControllerObj = new NewsfeedProflieController();
        
        $UserPostListById = $NewsfeedControllerObj->__getPostProfileList($idUser);

        $UserInfor = $this->modelUserObj->getIdUser(base64_decode($idUser));
        $UserInfor['user_name'] = base64_decode($UserInfor['user_name']);
        $UserInfor['user_phone'] = base64_decode($UserInfor['user_phone']);
        $UserInfor['user_email'] = base64_decode($UserInfor['user_email']);

        $UserInfor['post_list_by_user_id'] =  $UserPostListById;


        echo json_encode($UserInfor);
    }

    // @Author: @VoVanHau
    public function __CreateNewUser()
    {

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
        } catch (Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }

    // @Author: @VoVanHau
    public function __authUsingUser(){

        try {

            $blockInfoUser = [
                'user_phone' => isset($_POST['user_phone']) ? base64_encode(trim(strip_tags($_POST['user_phone']))) : null,
                'user_password' => isset($_POST['user_password']) ? base64_encode(trim(strip_tags($_POST['user_password']))) : null,
            ];

            $authStatus = $this->modelUserObj->__authUser($blockInfoUser);

            if ($authStatus) {

                $authStatus['user_id'] = base64_encode($authStatus['user_id']);

                $authStatus['user_token'] = base64_encode($authStatus['user_token']);

                echo json_encode([
                    'status_task' => 1,
                    'message_task' => 'successful',
                    'user_info' => $authStatus
                ]);
            } else {
                echo json_encode([
                    'status_task' => 2,
                    'message_task' => 'failed',
                ]);
            }
        } catch (Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }

    // @Author: @VoVanHau
    public function __checkingExistingToken() {

        try {
            require_once('./app/Http/Middleware/Authorization.php');

            // *** Way 1: -----------Authorization in Header-----------
            // $Authorization_vn = new Authorization();
            // $token = $Authorization_vn->getBearerToken(); // get token from request of Client

            $token = isset($_POST['access_token']) ? trim($_POST['access_token']) : null; // get token from request of Client

            if($token) {

                $rft = $this->modelUserObj->getUserByKey('user_token', base64_decode($token));

                if($rft) { // Token is existing

                    $rft['user_name'] = base64_decode($rft['user_name']);

                    echo json_encode([
                        'status_task' =>  1,
                        'message_task' => 'successful',
                        'rft' => $rft,
                    ]);
                } 
                else {
                    echo json_encode([
                        'status_task' => 2,
                        'message_task' => 'failed',
                    ]);
                }
            }
            else {

                echo json_encode([
                    'status_task' => 2,
                    'message_task' => 'failed',
                ]);
            }
        }
        catch (Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }

    //@Author: @KongKhanh
    public function __setProfileSetting($idUser){

        try {

            $idUser = base64_decode($idUser);

            if(isset($idUser)) {

                $blockUserSetting = [

                    'user_name' => isset($_POST['user_name']) ? trim(strip_tags(base64_encode($_POST['user_name']))) : '',
    
                    'user_email' => isset($_POST['user_email']) ? trim(strip_tags(base64_encode($_POST['user_email']))) : '',
    
                    'user_gender' => isset($_POST['user_gender']) ? trim(strip_tags($_POST['user_gender'])) : '',
    
                    'user_phone' => isset($_POST['user_phone']) ? trim(strip_tags(base64_encode($_POST['user_phone']))) : '',
    
                    'user_avatar' => isset($_FILES["user_avatar"]) ? ($_FILES["user_avatar"]) : null,

                    'user_description' => isset($_POST['user_description']) ? trim(strip_tags($_POST['user_description'])) : '',
    
                    'user_date_of_birth' => isset($_POST['user_date_of_birth']) ? trim(strip_tags($_POST['user_date_of_birth']).' 00:00:00') : '',

                ];

                $path = require_once('./Config/path.php');
                   
                if($path && is_array($path) && is_array($blockUserSetting)){
    
                    $target_infor = $blockUserSetting['user_avatar'] ? $blockUserSetting['user_avatar'] : null;
    
                    if($target_infor){
    
                        require_once('./Helpers/php/UploadImage.php');
    
                        $target_infor = array_merge($target_infor, [
                            'path_sto' => $path['store_media_avatar'],
                        ]);
                      
                        $Status_Store_Media = UploadImageModule::__upLoad($target_infor); // Ảnh từ Client chuyển đến thư mục Upload
    
                        if($Status_Store_Media) {
    
                            $blockUserSetting['user_avatar'] = $target_infor['name']; //Lấy tên hình ảnh lưu vào DB
                        } 
                        else {
    
                            unset($blockUserSetting['user_avatar']); // Error Uploading Media && Stop Update Avatar of User
                        }  
                    } else {

                        unset($blockUserSetting['user_avatar']); // Not Uploading Media && Stop Update Avatar of User
                    }

                    require('./app/Models/writeSide/UserMd/wUserMd.php');
    
                    $wUserMdObj = new wUserMd();
    
                    $Uafu = $wUserMdObj->setProfileSettingMd($blockUserSetting, $idUser);
                    
                    if(isset($Uafu)){
    
                        $Uinu =  $this->modelUserObj->getIdUser($idUser);
    
                        if(
                            $Uinu['user_name'] && 
                            $Uinu['user_phone'] && 
                            $Uinu['user_email']
                        ) {

                            $Uinu['user_name'] = base64_decode($Uinu['user_name']);
                            $Uinu['user_phone'] = base64_decode($Uinu['user_phone']);  
                            $Uinu['user_email'] = base64_decode($Uinu['user_email']);
                        }       
    
                        echo json_encode([
                            'status_task' =>  1,
                            'message_task' => 'successful',
                            'Uinu' => $Uinu,
                        ]);
                    }
                    
                }
            }

            else {

                echo json_encode([
                    'status_task' => 2,
                    'message_task' => 'failed',
                ]);
            }

        } catch (Exception $err) {

            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }

    //@Author: @KongKhanh
    public function __getUserRecommend($idUser){
        
        try {

            $UsersAllList = $this->modelUserObj->__getUserRecommendMd(base64_decode($idUser));

            $UserRecommend = [];
            
            for ($i = 0; $i < 5; $i++) {

                if (isset($UsersAllList[$i])) {

                    $UsersAllList[$i]['user_name'] = base64_decode($UsersAllList[$i]['user_name']);

                    array_push($UserRecommend, $UsersAllList[$i]);
                }
            }

            echo json_encode([
                'status_task' =>  1,
                'message_task' => 'successful',
                'ufrl' => $UserRecommend,
            ]);
        } 
        catch (Exception $err) {

            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }

    //@Author: @MaiMai
    public function __handleForgotPassword(){
        try {

            $user_phone = isset($_POST['user_phone']) ? base64_encode($_POST['user_phone']) : null;

            $UserbyKey = $this->modelUserObj->getUserByKey('user_phone', $user_phone);

            if ($UserbyKey) {
                require_once('./app/Models/writeSide/UserMd/wUserMd.php');
                require_once('./Helpers/php/Random.php');
                require_once('./service/Send_Mail_PHP/Send_Mail_PHP.php');

                $UserMdObj = new wUserMd();

                $newPassword = Random::generateRandomString(8);

                $UserMdObj->setNewPassword(
                    [
                        'user_password' => base64_encode($newPassword),
                    ], $UserbyKey['user_id']
                );

                $sendMailObj = new SendMailPHP();

                $content_send = 'Mật khẩu mới của tài khoản ' .base64_decode($UserbyKey['user_phone']). ' là: ' . $newPassword . ' </br>. Truy cập: metapoly.com để đăng nhập';

                $fromMail = [
                    'mailUser' => base64_encode('ur.spter@gmail.com'), //điền mail người gửi

                    'passUser' => base64_encode('metapoly123456'), //điền mật khẩu của mail
                ];

                $sendMail = $sendMailObj->__getSendMail($fromMail, base64_decode($UserbyKey['user_email']), $content_send);

                echo json_encode([
                    'status_task' => 1,
                    'status' =>  'success',
                    'message_task' => $content_send,
                ]);

            } else {

                echo json_encode([
                    'status_task' => 2,
                    'status' =>  'fail',
                    'message_task' => 'Số điện thoại không hợp lệ',
                ]);
                
            }

        } catch (Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }

    //@Author: @KongKhanh
    public function __FindUserController($idUser){
        

        $searchUser = [
            'user_name' => isset($_POST['user_name']) ? trim(strip_tags($_POST['user_name'])) : ''
        ];

        $pattern = "/{$searchUser['user_name']}/i";

        $FindUserList =  $this->modelUserObj->FindAllUser(base64_decode($idUser));

        $yr = [];

        for($f = 0; $f < count($FindUserList); $f++) {

            if(
                preg_match($pattern, base64_decode($FindUserList[$f]['user_name'])) == 1
            ) {

                $FindUserList[$f]['user_name'] = base64_decode($FindUserList[$f]['user_name']);
                array_push($yr, $FindUserList[$f]);
            }
        }

        if($yr && is_array($yr)) {
            
            echo json_encode($yr);
        } 
        else {

            echo json_encode([]);
        }
    }
}
