<?php

class UserController
{

    private $modelUserObj;

    // @Author: @KongKhanh
    function __construct()
    {
        require('./app/Models/readSide/UserMd/UserMd.php');

        $this->modelUserObj = new UserMd();
    }

    public function __getIdUser($idUser)
    {

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
    public function __authUsingUser()
    {

        try {

            $blockInfoUser = [
                'user_phone' => isset($_POST['user_phone']) ? base64_encode(trim(strip_tags($_POST['user_phone']))) : null,
                'user_password' => isset($_POST['user_password']) ? base64_encode(trim(strip_tags($_POST['user_password']))) : null,
            ];

            $authStatus = $this->modelUserObj->__authUser($blockInfoUser);

            $authStatus['user_id'] = base64_encode($authStatus['user_id']);

            if ($authStatus) {
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

    //@Author: @KongKhanh
    public function __setProfileSetting($idUser)
    {
        try {
            require('./app/Models/writeSide/UserMd/wUserMd.php');
            $blockUserSetting = [

                'user_name' => isset($_POST['user_name']) ? trim(strip_tags(base64_encode($_POST['user_name']))) : '',

                'user_email' => isset($_POST['user_email']) ? trim(strip_tags(base64_encode($_POST['user_email']))) : '',

                'user_gender' => isset($_POST['user_gender']) ? trim(strip_tags($_POST['user_gender'])) : '',

                'user_phone' => isset($_POST['user_phone']) ? trim(strip_tags(base64_encode($_POST['user_phone']))) : '',

                // 'user_date_of_birth' => isset($_POST['user_date_of_birth']) ? trim(strip_tags(base64_encode($_POST['user_date_of_birth']))) : '',
            ];

            $wUserMdObj = new wUserMd();

            $idUser = base64_decode($idUser);

            $wUserMdObj->setProfileSettingMd($blockUserSetting, $idUser);

            echo json_encode([
                'status_task' =>  1,
                'message_task' => 'successful',
            ]);
        } catch (Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }

    public function __getUser($idUser)
    {
        try {
            require('./app/Models/writeSide/UserMd/wUserMd.php');

            $UsersAllList = $this->modelUserObj->getUser(base64_decode($idUser));
            $UserRecommend = [];
            for ($i = 0; $i < 5; $i++) {
                if (isset($UsersAllList[$i])) {
                    $UsersAllList[$i]['user_name'] = base64_decode($UsersAllList[$i]['user_name']);
                    array_push($UserRecommend, $UsersAllList[$i]);
                }
            }

            echo json_encode($UserRecommend);
        } catch (Exception $err) {
            echo json_encode([
                'status_task' => 2,
                'message_task' => 'failed',
            ]);
        }
    }

    public function __handleForgotPassword()
    {
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

                $content_send = 'Mật khẩu mới của bạn: ' . $newPassword . 'Truy cập: metapoly.com để đăng nhập';

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
    
}
