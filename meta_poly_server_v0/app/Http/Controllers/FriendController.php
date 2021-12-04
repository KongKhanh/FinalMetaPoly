<?php 

    class FriendController {

        protected $RequestFriendObj;

        function __construct(){

            require('./app/Models/writeSide/FriendMd/wRequestFriend.php');
    
            $this->RequestFriendObj = new wRequestFriend();
        }

        public function __AddNewFriend() {

            try {

                // Field for adding
                $confirmRequestfriend = [
                    'fb_fk_user_req_id' => isset($_POST['fb_fk_user_req_id']) ? (base64_decode($_POST['fb_fk_user_req_id'])) : null,
                    'fb_fk_user_comf_id' => isset($_POST['fb_fk_user_comf_id']) ? ($_POST['fb_fk_user_comf_id']) : null,
                    'fb_active' => 0, // Waiting for friends to accept request
                ];

                // Field for deleting
                $f_cancel_req_add_fri = [
                    'fbid' => isset($_POST['fbid']) ? trim(strip_tags($_POST['fbid'])) : null,
                    'status_cancel' => isset($_POST['status_cancel']) ? trim(strip_tags($_POST['status_cancel'])) : null,
                ]; 

                require_once('./app/Models/writeSide/FriendMd/wFriendMd.php');

                $waddFriendObj = new wFriendMd();

                if(is_null($f_cancel_req_add_fri['status_cancel']) && is_null($f_cancel_req_add_fri['fbid'])) { // Thuc hien tac vu them ban moi
    
                    $recordID = $waddFriendObj->insertFriend($confirmRequestfriend);
    
                    if($recordID) {
    
                        echo json_encode([
                            'status_task' =>  1,
                            'message_task' => 'successful',
                            'recordID' => $recordID,
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

                    if(isset($f_cancel_req_add_fri['status_cancel']) && isset($f_cancel_req_add_fri['fbid'])) {

                        $stdr = $this->RequestFriendObj->wDeleteFriend(trim($f_cancel_req_add_fri['fbid']));

                        if($stdr) {

                            echo json_encode([
                                'status_task' =>  1,
                                'message_task' => 'successful',
                            ]);
                        } 
                        else {
                            
                            echo json_encode([
                                'status_task' =>  2,
                                'message_task' => 'fail',
                                'a' => $f_cancel_req_add_fri
                            ]);
                        }
                    } 
                    else {

                        echo json_encode([
                            'status_task' =>  2,
                            'message_task' => 'fail',
                        ]);
                    }
                }
                return;
            }
            catch(Exception $err) {
                
                echo json_encode([
                    'status_task' => 2,
                    'message_task' => 'failed',
                ]);

                return;
            }
    
        }

        //Author: @MaiMai
        public function __ListFriend($userID){
            
            try {
                require_once('./app/Models/readSide/FriendMd/FriendMd.php');
        
                $listFriend_Obj = new FriendMd();

                $listFriend = $listFriend_Obj->getListFriend(base64_decode($userID));

                if($listFriend && is_array($listFriend)){

                    for($i=0; $i < count($listFriend); $i++){
                        $listFriend[$i]['user_name'] = base64_decode($listFriend[$i]['user_name']);
                    }

                    echo json_encode([
                        'status_task' =>  1,
                        'friendlist' => $listFriend,
                        'message_task' => 'successful',
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

        //Author: @KongKhanh
        public function __ConfirmRequestFriend(){
            
            try {

                $confirmRequestfriend = [
                    'fb_active' => isset($_POST['fb_active']) ? ($_POST['fb_active']) : null,
                    'fb_id' => isset($_POST['fb_id']) ? ($_POST['fb_id']) : null,
                ];

                $confirmRequestfriend['fb_active'] == 'true' ? $confirmRequestfriend['fb_active'] = 1 : $confirmRequestfriend['fb_active'] = 0;

                if($confirmRequestfriend['fb_active'] == 1) { 

                    $this->RequestFriendObj->wUpdateFriend($confirmRequestfriend,$confirmRequestfriend['fb_id']);

                    echo json_encode([
                        'status_task' => 1,
                        'is_accpet' => true,
                        'message_task' => 'Accept successful',
                        'request_friend' => $confirmRequestfriend
                    ]);

                    return;
                } 

                if($confirmRequestfriend['fb_active'] == 0) {

                    $this->RequestFriendObj->wDeleteFriend($confirmRequestfriend['fb_id']);

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
