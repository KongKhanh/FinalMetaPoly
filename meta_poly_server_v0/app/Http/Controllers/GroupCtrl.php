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

        public function __getGrSingleInfo($id_Gr) {

            require_once('./app/Models/readSide/Group/rGroupMd.php');

            $id_Gr_S = isset($id_Gr) ? trim($id_Gr) : null;

            $rGroupMd_vn = new rGroupMd();

            // echo $gr_info = $rGroupMd_vn->__getSingleData() . "\n";
            $gr_post_l = $rGroupMd_vn->__getPostLGr();

            echo json_encode($gr_post_l);

        }

    }

?>