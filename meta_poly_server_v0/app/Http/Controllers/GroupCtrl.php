<?php 
    class GroupCtrl {

        protected $rGroupMd_vn;

        function __construct(){

            require_once('./app/Models/readSide/Group/rGroupMd.php');

            $this->rGroupMd_vn = new rGroupMd();
        }

        public function __handleCreateNewGr() {

            try {

                require_once('./app/Models/writeSide/Group/GroupMd.php');

                $blockCreNewGr = [
                    'group_name' => isset($_POST['group_name']) ? trim(strip_tags($_POST['group_name'])) : null,
                    'group_created_by_user_id' => isset($_POST['group_created_by_user_id']) ? base64_decode(trim(strip_tags($_POST['group_created_by_user_id']))) : null,
                ];
    
                $GroupMd_vn = new GroupMd();

                $recordID = $GroupMd_vn -> __insertToCreNewGr($blockCreNewGr);
    
                echo json_encode([
                    'status_task' =>  1,
                    'message_task' => 'successful',
                    'recordID' => $recordID,
                ]);
            }

            catch (Exception $err) {
                echo json_encode([
                    'status_task' => 2,
                    'message_task' => 'failed',
                ]);
            }
        }

        // Ham lay thong tin nhung Group user da tham gia
        public function __getGrUserJoin($id_User) {
            
            try {

                if($id_User) {

                    $glHasJoined = $this->rGroupMd_vn->__getGrListForJoined(base64_decode($id_User));

                    if(isset($glHasJoined)) {

                        echo json_encode([
                            'status_task' =>  1,
                            'message_task' => 'successful',
                            'glHasJoined' => $glHasJoined,
                        ]);
                    } 
                    else {
                        echo json_encode([
                            'status_task' =>  2,
                            'message_task' => 'fail',
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
            catch (Exception $e) {
                echo json_encode([
                    'status_task' =>  2,
                    'message_task' => 'fail',
                ]);
            }
        }

        // Ham hanle voi Group Item (chi tiet Group)
        public function __getGrSingleInfo($id_Gr) {

            try {

                $id_Gr_S = isset($id_Gr) ? trim($id_Gr) : null;
    
                // Thong tin ve 1 group
                $gr_info = $this->rGroupMd_vn->__getSingleData($id_Gr);
                // Cac bai post trong group
                $gr_post_l = $this->rGroupMd_vn->__getPostLGr($id_Gr);
                // Cac thanh vien cua nhom
                $gr_members_l = $this->rGroupMd_vn->__getMembersGr($id_Gr);

                echo json_encode([
                    'status_task' =>  1,
                    'message_task' => 'successful',
                    'gr_info' => $gr_info,
                    'gr_post_l' => $gr_post_l,
                    'gr_members_l' => $gr_members_l,
                ]);
            }
            catch (Exception $e) {

                echo json_encode([
                    'status_task' =>  2,
                    'message_task' => 'fail',
                ]);
            }
        }
        
        /*---------------------------------------RECOMMEND GROUP SYSTEM-----------------------------------

            ***__getRecommendGr = 
            Groups (tat ca cac Groups) - hasJoinedGroups (Danh sach nhung Group da tham gia) + hasRequestAcceptGroups (Danh sach nhung Group da goi yeu cau tham gia)

        */ 

        // Ham goi y Groups user chua tham gia
        public  function __getRecommendGr($id_User) {

            try {

                $payload_GrJoinL = isset($_POST['payload_GrJoinL']) ? json_decode($_POST['payload_GrJoinL']) : null; // Danh sach cac Groups da tham gia

                if($payload_GrJoinL && is_array($payload_GrJoinL)) {

                    // Danh sach cac Group da tham gia
                    $ta = [];

                    foreach($payload_GrJoinL as $payload_GrJoini) {

                        array_push($ta, $payload_GrJoini->group_id);
                    }

                    $rgrwl = $this->rGroupMd_vn->__GrWaitingAcceptingL(base64_decode($id_User)); // $rgrwl: nhung Group ma User da goi yeu cau tham gia nhung dang trong giai doan duyet

                    if($rgrwl && is_array($rgrwl)) {

                        foreach($rgrwl as $rgrwl_i) {

                            if(isset($rgrwl_i['user_group_fk_group_id'])) {

                                array_push($ta, $rgrwl_i['user_group_fk_group_id']);
                            }
                        }
                    }
                    
                    $rgr = $this->rGroupMd_vn->__recommedGrSystemCore($ta, base64_decode($id_User)); // $rgr: goi y Groups user chua tham gia
                    
                    if($rgr && is_array($rgr)) {

                        echo json_encode([
                            'status_task' =>  1,
                            'message_task' => 'successful',
                            'rgr' => $rgr,
                        ]);
                    }
                    else {
                        echo json_encode([
                            'status_task' =>  2,
                            'message_task' => 'fail',
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
            catch (Exception $err) {
                echo json_encode([
                    'status_task' =>  2,
                    'message_task' => 'fail',
                ]);
            }
        }

        public function __getGrWaitingForAccepting($id_User) {

            try {

                if(isset($id_User)) {
    
                    $this->rGroupMd_vn->__GrWaitingAcceptingL($id_User);
    
                    echo json_encode([
                        'status_task' =>  1,
                        'message_task' => 'successful',
                    ]);
                }
                else {
                    echo json_encode([
                        'status_task' =>  2,
                        'message_task' => 'fail',
                    ]); 
                }
            }
            catch (Exception $err) {

                echo json_encode([
                    'status_task' =>  2,
                    'message_task' => 'fail',
                ]); 
            }
        }

        public function __handleJoinGrRequest($id_User) {

            try {
                
                $gr_ID = isset($_POST['user_group_fk_group_id']) ? trim($_POST['user_group_fk_group_id']) : null;

                if($id_User && $gr_ID) {

                    require_once('./app/Models/writeSide/Group/GroupMd.php');

                    $wGroupMd_vn = new GroupMd();

                    $add_Block = [
                        'user_group_fk_group_id' => $gr_ID,
                        'user_group_fk_user_id' => base64_decode($id_User),
                        'user_group_accept' => 0,
                    ];

                    $Gr_Sta = $wGroupMd_vn->__ReqToJoinGroup($add_Block, $id_User);

                    if($Gr_Sta) {

                        echo json_encode([
                            'status_task' =>  1,
                            'message_task' => 'successful',
                            'Gr_Sta' => $Gr_Sta,
                        ]);
                    } else {

                        echo json_encode([
                            'status_task' =>  2,
                            'message_task' => 'fail',
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
            catch (Exception $err) {

                echo json_encode([
                    'status_task' =>  2,
                    'message_task' => 'fail',
                ]);
            }
        }

    }

?>