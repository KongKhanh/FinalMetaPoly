<?php 

    class FriendController{

        function __construct(){
            require('./app/Models/writeSide/FriendMd/wRequestFriend.php');
    
            $this->RequestFriendObj = new wRequestFriend();
        }

        public function __AddNewFriend() {

            try {
    
                $confirmRequestfriend = [
                    'fb_fk_user_req_id' => isset($_POST['fb_fk_user_req_id']) ? (base64_decode($_POST['fb_fk_user_req_id'])) : null,
                    'fb_fk_user_comf_id' => isset($_POST['fb_fk_user_comf_id']) ? ($_POST['fb_fk_user_comf_id']) : null,
                ];
                
                require_once('./app/Models/writeSide/FriendMd/wFriendMd.php');
        
                $waddFriendObj = new wFriendMd();

                $recordID = $waddFriendObj->insertFriend($confirmRequestfriend);

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

        //MaiMai
        // public function __ListFriend(){
        //     try {
        //         $blockInfoUser = [
        //             'fb_fk_user_req_id' => isset($_POST['fb_fk_user_req_id']) ? (base64_decode($_POST['fb_fk_user_req_id'])) : null,
        //             'fb_fk_user_comf_id' => isset($_POST['fb_fk_user_comf_id']) ? ($_POST['fb_fk_user_comf_id']) : null,
        //             'active_friend' => isset($_POST['fb_active']) ? ($_POST['fb_active']) : null,
        //         ];
                
        //         require_once('./app/Models/readSide/FriendMd/FriendMd.php');
        
        //         $listFriend = new FriendMd();

        //         $recordID = $listFriend->getListFriend($blockInfoUser);
        
        //         echo json_encode([
        //             'status_task' =>  1,
        //             'message_task' => 'successful',
        //             'recordID' => $recordID,
        //         ]);
        //     }
        // }
    
        public function __ConfirmRequestFriend(){
            try {

                $confirmRequestfriend = [
                    'fb_active' => isset($_POST['fb_active']) ? ($_POST['fb_active']) : null,
                    'fb_id' => isset($_POST['fb_id']) ? ($_POST['fb_id']) : null,
                ];

                $confirmRequestfriend['fb_active'] == 'true' ? $confirmRequestfriend['fb_active'] = 1 : $confirmRequestfriend['fb_active'] = 0;

                if($confirmRequestfriend['fb_active'] == 1) { 

                    $this->RequestFriendObj::wUpdateFriend($confirmRequestfriend,$confirmRequestfriend['fb_id']);

                    echo json_encode([
                        'status_task' => 1,
                        'is_accpet' => true,
                        'message_task' => 'Accept successful',
                        'request_friend' => $confirmRequestfriend
                    ]);

                    return;
                } 
                if($confirmRequestfriend['fb_active'] == 0) {

                    $this->RequestFriendObj::wDeleteFriend($confirmRequestfriend['fb_id']);

                    echo json_encode([
                        'status_task' => 1,
                        'is_accpet' => false,
                        'message_task' => 'Deny successful',
                        'request_friend' => $confirmRequestfriend,
                    ]);

                    return;
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
