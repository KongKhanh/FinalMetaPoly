<?php 

    class FriendController{

        public function __AddNewFriend() {

            try {
    
                $blockInfoUser = [
                    'fb_fk_user_req_id' => isset($_POST['fb_fk_user_req_id']) ? (base64_decode($_POST['fb_fk_user_req_id'])) : null,
                    'fb_fk_user_comf_id' => isset($_POST['fb_fk_user_comf_id']) ? ($_POST['fb_fk_user_comf_id']) : null,
                ];
                
                require_once('./app/Models/writeSide/FriendMd/wFriendMd.php');
        
                $waddFriendObj = new wFriendMd();

                $recordID = $waddFriendObj->insertFriend($blockInfoUser);
        
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
        public function __ListFriend(){
            try {
                $blockInfoUser = [
                    'fb_fk_user_req_id' => isset($_POST['fb_fk_user_req_id']) ? (base64_decode($_POST['fb_fk_user_req_id'])) : null,
                    'fb_fk_user_comf_id' => isset($_POST['fb_fk_user_comf_id']) ? ($_POST['fb_fk_user_comf_id']) : null,
                    'active_friend' => isset($_POST['fb_active']) ? ($_POST['fb_active']) : null,
                ];
                
                require_once('./app/Models/readSide/FriendMd/FriendMd.php');
        
                $listFriend = new FriendMd();

                $recordID = $listFriend->getListFriend($blockInfoUser);
        
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
    }
