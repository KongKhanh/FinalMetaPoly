<?php 
    class GroupCtrl {

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

                    require_once('./app/Models/readSide/Group/rGroupMd.php');
    
                    $rGroupMd_vn = new rGroupMd();

                    $glHasJoined = $rGroupMd_vn->__getGrListForJoined($id_User);

                    if($glHasJoined) {

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

                require_once('./app/Models/readSide/Group/rGroupMd.php');

                $id_Gr_S = isset($id_Gr) ? trim($id_Gr) : null;
    
                $rGroupMd_vn = new rGroupMd();
    
                // Thong tin ve 1 group
                $gr_info = $rGroupMd_vn->__getSingleData($id_Gr);
                // Cac bai post trong group
                $gr_post_l = $rGroupMd_vn->__getPostLGr($id_Gr);
                // Cac thanh vien cua nhom
                $gr_members_l = $rGroupMd_vn->__getMembersGr($id_Gr);

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

        // Ham goi y Groups user chua tham gia
        public  function __getRecommendGr($id_User) {

            try {

                $payload_GrJoinL = isset($_POST['payload_GrJoinL']) ? json_decode($_POST['payload_GrJoinL']) : null;

                if($payload_GrJoinL && is_array($payload_GrJoinL)) {

                    $ta = [];

                    foreach($payload_GrJoinL as $payload_GrJoini) {

                        array_push($ta, $payload_GrJoini->group_id);
                    }

                    require_once('./app/Models/readSide/Group/rGroupMd.php');

                    $rGroupMd_vn = new rGroupMd();

                    $rgr = $rGroupMd_vn->__recommedGrSystemCore($ta);

                    if($rgr) {

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

        public function __handleJoinGrRequest($id_User) {

        }

    }

?>